import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowRight, Code2 } from "lucide-react";

const Welcome = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) return;

    localStorage.setItem("user_name", trimmedName);
    navigate("/dashboard");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f3ed] px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c96524] text-white">
            <Code2 size={23} />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[#29231f]">
              Interview Tracker
            </h2>
            <p className="text-xs tracking-[0.18em] text-[#8b8178]">
              YOUR PREPARATION SPACE
            </p>
          </div>
        </div>

        {/* Welcome Card */}
        <div className="rounded-2xl border border-[#e9e2d8] bg-white p-7 shadow-sm sm:p-9">
          <div className="mb-7">
            <span className="inline-flex rounded-full bg-[#fff0e5] px-3 py-1.5 text-xs font-medium text-[#c96524]">
              LET'S GET STARTED
            </span>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#29231f] sm:text-4xl">
              Welcome! 👋
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#8b8178]">
              Let's make this your space to prepare, practice, and
              grow. First, what should we call you?
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <label
              htmlFor="userName"
              className="mb-2 block text-sm font-medium text-[#4b433d]"
            >
              What should we call you?
            </label>

            <input
              id="userName"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
              autoComplete="given-name"
              autoFocus
              required
              minLength={2}
              maxLength={40}
              className="w-full rounded-xl border border-[#e4ddd4] bg-[#fcfaf7] px-4 py-3.5 text-sm text-[#29231f] outline-none transition placeholder:text-[#aaa097] focus:border-[#c96524] focus:ring-4 focus:ring-[#c96524]/10"
            />

            <button
              type="submit"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#c96524] px-5 py-3.5 text-sm font-medium text-white transition hover:bg-[#b7581e]"
            >
              Get Started
              <ArrowRight size={17} />
            </button>
          </form>

          <p className="mt-5 text-center text-xs text-[#9b9188]">
            One step closer to your next opportunity.
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-[#a1988e]">
          Your journey. Your progress. Your pace.
        </p>
      </div>
    </main>
  );
};

export default Welcome;