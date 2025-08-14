// standard button used throughout the application

interface settings {
  text: string;
  href: string;
}
export function StandardButton({ text, href }: settings) {
  return (
    <a
      type="button"
      href={href}
      className="mt-6 py-2 px-3 rounded-lg font-semibold bg-blue-900 w-fit mx-auto text-white border-2 border-blue-900 cursor-pointer hover:bg-amber-500"
    >
      {text}
    </a>
  );
}
