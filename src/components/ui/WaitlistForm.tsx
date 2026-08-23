import { useState } from 'react';
import type { FormEvent } from 'react';
import { Button } from './Button';
import { Icon } from './Icon';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();
    if (!EMAIL_PATTERN.test(value)) {
      setState('error');
      setMessage('That address does not look valid — check it and try again.');
      return;
    }
    setState('submitting');
    setMessage('');
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      if (value.endsWith('@example.com')) {
        throw new Error('rejected');
      }
      setState('success');
      setMessage('You are on the list. First light lands in your inbox at 04:58.');
    } catch {
      setState('error');
      setMessage('Sign-up failed. Try again, or write to crew@umbra.run.');
    }
  }

  if (state === 'success') {
    return (
      <div
        role="status"
        className="flex items-center gap-3 rounded-4xl border border-volt/30 bg-volt-dim px-6 py-5 text-sm text-lane"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-volt text-asphalt">
          <Icon name="check" size={14} />
        </span>
        {message}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className="flex flex-col gap-3 rounded-4xl border border-white/[0.07] bg-white/[0.03] p-1.5 sm:flex-row sm:items-center sm:rounded-full">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          autoComplete="email"
          placeholder="you@darkhours.run"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (state === 'error') {
              setState('idle');
              setMessage('');
            }
          }}
          aria-invalid={state === 'error'}
          aria-describedby={state === 'error' ? 'waitlist-error' : undefined}
          className="min-h-touch w-full rounded-full bg-transparent px-5 text-sm text-lane caret-volt placeholder:text-lane-mute focus:outline-none"
        />
        <Button type="submit" arrow disabled={state === 'submitting'} className="justify-center">
          {state === 'submitting' ? 'Signing up…' : 'Join the waitlist'}
        </Button>
      </div>
      {state === 'error' ? (
        <p id="waitlist-error" role="alert" className="mt-3 px-4 text-sm text-[#FF9B7A]">
          {message}
        </p>
      ) : null}
    </form>
  );
}
