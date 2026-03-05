type Column = { id: string; title: string; tasks: string[] };

export default function MainContent({ columns }: { columns: Column[] }) {
  return (
    <main style={{ flex: 1, padding: 16, overflow: "auto" }}>
      <div style={{ display: "flex", gap: 16 }}>
        {columns.map((col) => (
          <section key={col.id} style={{ width: 260, background: "white", borderRadius: 10, padding: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            <h3 style={{ margin: "0 0 10px 0" }}>
              {col.title} ({col.tasks.length})
            </h3>
            <div style={{ display: "grid", gap: 10 }}>
              {col.tasks.map((task, i) => (
                <div key={i} style={{ background: "#f5f5f5", borderRadius: 8, padding: 10 }}>
                  {task}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}