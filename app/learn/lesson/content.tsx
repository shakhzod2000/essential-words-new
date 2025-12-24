'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ChevronRight, Volume2, CheckCircle } from 'lucide-react';

interface Word {
  id: string;
  word: string;
  pronunciation: string;
  definition: string;
  example_sentence: string;
  part_of_speech: string;
}

interface LessonData {
  id: string;
  title: string;
  words: Word[];
}

type LessonPhase = 'learn' | 'practice' | 'review';

export default function LessonContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [lesson, setLesson] = useState<LessonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [phase, setPhase] = useState<LessonPhase>('learn');
  const [learnedWords, setLearnedWords] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const unitId = searchParams.get('unitId');
        if (!unitId) return;

        const response = await fetch(`/api/units/${unitId}/lesson`);
        const data = await response.json();
        setLesson(data);
      } catch (error) {
        console.error('Failed to fetch lesson:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [searchParams]);

  const handleWordLearned = () => {
    const currentWord = lesson?.words[currentWordIndex];
    if (currentWord) {
      const newLearned = new Set(learnedWords);
      newLearned.add(currentWord.id);
      setLearnedWords(newLearned);

      if (currentWordIndex < (lesson?.words.length || 0) - 1) {
        setCurrentWordIndex(currentWordIndex + 1);
      } else {
        setPhase('practice');
      }
    }
  };

  const handlePracticeAnswer = () => {
    if (currentWordIndex < (lesson?.words.length || 0) - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      setPhase('review');
    }
  };

  const handleCompleteLesson = async () => {
    try {
      const unitId = searchParams.get('unitId');
      if (!unitId) return;

      await fetch(`/api/units/${unitId}/complete`, {
        method: 'POST',
      });

      router.push(`/learn/dashboard`);
    } catch (error) {
      console.error('Failed to complete lesson:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading lesson...</p>
        </div>
      </div>
    );
  }

  if (!lesson || !lesson.words.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <p className="text-gray-600">Lesson not found</p>
      </div>
    );
  }

  const currentWord = lesson.words[currentWordIndex];
  const progress = ((currentWordIndex + 1) / lesson.words.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="text-blue-600 hover:text-blue-700 font-medium mb-6"
          >
            ← Back
          </button>

          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">{lesson.title}</h1>
            <span className="text-sm font-semibold text-gray-600">
              {phase === 'learn' ? 'Learning' : phase === 'practice' ? 'Practice' : 'Review'}
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          {phase === 'learn' && currentWord && (
            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <h2 className="text-4xl font-bold text-gray-900">{currentWord.word}</h2>
                  <button
                    onClick={() => {
                      const utterance = new SpeechSynthesisUtterance(currentWord.word);
                      speechSynthesis.speak(utterance);
                    }}
                    className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                    title="Pronunciation"
                  >
                    <Volume2 className="w-6 h-6 text-blue-600" />
                  </button>
                </div>
                <p className="text-lg text-gray-600 mb-6">{currentWord.pronunciation}</p>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <p className="text-sm text-gray-600 mb-2">Definition</p>
                  <p className="text-lg font-semibold text-gray-900">{currentWord.definition}</p>
                </div>

                <div className="bg-green-50 rounded-2xl p-6">
                  <p className="text-sm text-gray-600 mb-2">Example</p>
                  <p className="text-lg text-gray-900">{currentWord.example_sentence}</p>
                </div>

                <div className="bg-orange-50 rounded-2xl p-6">
                  <p className="text-sm text-gray-600">Part of Speech</p>
                  <p className="text-lg font-semibold text-gray-900">{currentWord.part_of_speech}</p>
                </div>
              </div>

              <button
                onClick={handleWordLearned}
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all"
              >
                I Know This Word
              </button>
            </div>
          )}

          {phase === 'practice' && currentWord && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 text-center">
                What does "{currentWord.word}" mean?
              </h2>

              <div className="space-y-3">
                {[currentWord.definition, 'Wrong option 1', 'Wrong option 2', 'Wrong option 3'].map((option, idx) => (
                  <button
                    key={idx}
                    onClick={handlePracticeAnswer}
                    className="w-full p-4 text-left rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-gray-50 transition-all font-medium text-gray-900"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {phase === 'review' && (
            <div className="space-y-8 text-center">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
              <h2 className="text-3xl font-bold text-gray-900">Lesson Complete!</h2>
              <p className="text-lg text-gray-600 mb-8">
                You've learned {learnedWords.size} words. Keep practicing to master them all.
              </p>

              <button
                onClick={handleCompleteLesson}
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                Back to Dashboard
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
