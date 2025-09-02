/* standard button used throughout the application 
text and href defined on call*/

interface settings {
  text: string;
  href: string;
}
export function StandardButton({ text, href }: settings) {
  return (
    <a
      type="button"
      href={href}
      className="mt-6 py-2 px-3 rounded-lg font-semibold bg-blue-900 w-fit mx-auto text-white  cursor-pointer hover:bg-amber-500 
      shadow-lg active:scale-95 active:shadow-md active:bg-amber-500 active:opacity-90
      transform transition-transform duration-100 xl:duration-200 hover:scale-103"
    >
      {text}
    </a>
  );
}
