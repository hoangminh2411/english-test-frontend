import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className=" font-bold flex items-center">
          <div className="flex gap-4 items-center text-xl">
            <Image width={60} height={60} src="/assets/logos/logo.jpg" alt="STUDY4" />
            <h1>TestMaster</h1>
          </div>
        </Link>
        <div className="flex items-center justify-center gap-20 flex-1 text-xl">
          <Link href="/" className="text-gray-600 hover:text-blue-600 font-bold">
            Home
          </Link>
          <Link href="#exam" className="text-gray-600 hover:text-blue-600 font-bold">
            Exam
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-600 font-bold">
            About
          </Link>
        </div>
        <nav className="space-x-4">
          <Link href="/login/" className="btn btn-primary rounded-md px-4 py-2 text-white bg-blue-500 hover:bg-blue-600">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};
