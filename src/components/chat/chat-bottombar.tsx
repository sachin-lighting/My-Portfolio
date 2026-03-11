// src/components/chat/chat-bottombar.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

type ChatMode = 'personal' | 'open';

interface ChatBottombarProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  stop: () => void;
  input: string;
  isToolInProgress: boolean;
  chatMode: ChatMode;
  onChatModeChange: (mode: ChatMode) => void;
}

export default function ChatBottombar({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  stop,
  isToolInProgress,
  chatMode,
  onChatModeChange,
}: ChatBottombarProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === 'Enter' &&
      !e.nativeEvent.isComposing &&
      !isToolInProgress &&
      input.trim()
    ) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full pb-2 md:pb-8"
    >
      <div className="mb-3 flex w-full justify-start px-1 md:px-4">
        <div className="inline-flex rounded-full border border-[#E5E5E9] bg-[#ECECF0] p-1 dark:border-neutral-700 dark:bg-neutral-800">
          {(['personal', 'open'] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => onChatModeChange(mode)}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors',
                chatMode === mode
                  ? 'bg-[#0171E3] text-white'
                  : 'text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white'
              )}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative w-full md:px-4">
        <div className="mx-auto flex items-center rounded-full border border-[#E5E5E9] bg-[#ECECF0] py-2 pr-2 pl-6 dark:border-neutral-700 dark:bg-neutral-800">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder={
              isToolInProgress
                ? 'Tool is in progress...'
                : chatMode === 'personal'
                  ? 'Ask about me'
                  : 'Ask me anything'
            }
            className="text-md w-full border-none bg-transparent text-black placeholder:text-gray-500 focus:outline-none"
            disabled={isToolInProgress || isLoading}
          />

          <button
            type="submit"
            disabled={isLoading || !input.trim() || isToolInProgress}
            className="flex items-center justify-center rounded-full bg-[#0171E3] p-2 text-white disabled:opacity-50"
            onClick={(e) => {
              if (isLoading) {
                e.preventDefault();
                stop();
              }
            }}
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        </div>
      </form>
    </motion.div>
  );
}
