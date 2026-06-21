export default function Footer() {
  return (
    <footer className="section-pad border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <span className="font-mono text-xs">
          © {new Date().getFullYear()} Khansumber Altankhuyag
        </span>
        <span className="font-mono text-xs">
          Designed &amp; built end-to-end · San Francisco
        </span>
      </div>
    </footer>
  );
}
