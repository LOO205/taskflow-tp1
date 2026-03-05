interface HeaderProps {
  title: string;
  onMenuClick: () => void;
}

export default function Header({ title, onMenuClick }: HeaderProps) {
  return (
    <header style={{ background: "#1B8C3E", color: "white", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={onMenuClick} style={{ fontSize: 18 }}>☰</button>
        <h1 style={{ fontSize: 18, margin: 0 }}>{title}</h1>
      </div>
      <span style={{ width: 32, height: 32, borderRadius: 999, background: "rgba(255,255,255,0.25)", display: "grid", placeItems: "center" }}>JD</span>
    </header>
  );
}