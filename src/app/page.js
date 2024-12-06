'use client';
export default function Home() {
  const handleClick=()=>alert("hello i am alert in next js")
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        hello
        <button onClick={handleClick}>
          click me
        </button>
      </div>
    </>
  );
}
