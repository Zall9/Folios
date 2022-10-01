import { useRouter } from "next/router";

export default function ButtonMailTo() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("mailto:paul.delifer@yahoo.com")}
    >
      Click me
    </button>
  );
}
