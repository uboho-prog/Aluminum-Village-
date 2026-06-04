import { createFileRoute, Link } from "@tanstack/react-router";
import { img } from "@/lib/images";
import { Building2 } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in | Aluminium Village" },
      { name: "description", content: "Sign in to access your Aluminium Village account." },
    ],
  }),
  component: Login,
});

function Login() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      <div className="relative hidden lg:block">
        <img src={img.loginBg} alt="Industrial excellence" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-primary/40 to-transparent" />
        <div className="relative h-full flex flex-col justify-between p-12 text-primary-foreground">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-white/10 backdrop-blur font-bold">
              AV
            </div>
            <span className="font-semibold">Aluminium Village</span>
          </Link>
          <div>
            <h2 className="text-4xl font-bold leading-tight">Precision in Every Connection.</h2>
            <p className="mt-3 text-primary-foreground/80 max-w-md">
              Join the global marketplace for premium aluminium solutions and verified industrial
              suppliers.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <Link
            to="/"
            className="lg:hidden flex items-center gap-2 mb-8"
          >
            <div className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-bold">
              AV
            </div>
            <span className="font-semibold">Aluminium Village</span>
          </Link>

          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to access your cart and complete checkout.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="rounded-md border bg-card py-2.5 text-sm font-medium hover:bg-secondary inline-flex items-center justify-center gap-2">
              <span className="size-4 rounded-full bg-gradient-to-br from-red-500 via-yellow-400 to-blue-500" />
              Google
            </button>
            <button className="rounded-md border bg-card py-2.5 text-sm font-medium hover:bg-secondary inline-flex items-center justify-center gap-2">
              <Building2 className="size-4" /> SSO
            </button>
          </div>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex-1 h-px bg-border" />
            Or login with email
            <div className="flex-1 h-px bg-border" />
          </div>

          <form className="space-y-4">
            <label className="block">
              <span className="text-xs font-medium">Email Address</span>
              <input
                type="email"
                placeholder="you@company.com"
                className="mt-1 w-full rounded-md border bg-card px-3 py-2.5 text-sm"
              />
            </label>
            <label className="block">
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium">Password</span>
                <a className="text-xs text-brand hover:underline">Forgot password?</a>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full rounded-md border bg-card px-3 py-2.5 text-sm"
              />
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="rounded" />
              Keep me signed in for 30 days
            </label>
            <button className="w-full rounded-md bg-brand text-brand-foreground py-2.5 text-sm font-semibold hover:opacity-90">
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            New to the village?{" "}
            <Link to="/join" className="text-brand font-medium hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
