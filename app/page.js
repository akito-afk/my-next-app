import Link from "next/link";

export default async function Page() {
  // サーバーコンポーネント内からの fetch（開発サーバで /api を呼べます）
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();

console.log("Git連動テスト!!");

  return (
    <div>
      <p>これは Next.js サンプルページです。</p>
      <p>API からのメッセージ: {data.message}</p>
      <p><Link href="/about">Aboutページへ</Link></p>
    </div>
  );
}
