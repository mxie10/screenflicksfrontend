'use client'

import { useState } from 'react';
import { Inter } from "next/font/google";
import { FaAlignJustify } from "react-icons/fa";
import useSideBar from './hooks/useSidebar';
import SideBar from "./component/Sidebar";
import NavBar from "./component/NavBar";
import "./globals.css";
import Footer from "./component/Footer";
import LoginModal from "./component/modals/LoginModal";
import RegisterModal from "./component/modals/RegisterModal";
import SearchBar from "./component/SearchBar";
import { ContextProvider } from "./context/useContext";
import SearchResultModal from './component/modals/SearchResultModal';
import { useDebounce } from './hooks/useDebounce';
import { useSearchMovies } from './hooks/useSearchMovie';

const inter = Inter({ subsets: ["latin"] });

interface LayoutBodyProps {
  children: React.ReactNode;
}

const LayoutBody: React.FC<LayoutBodyProps> = ({ children }) => {

  const sidebarModel = useSideBar();
  const [searchParam, setSearchParam] = useState<String>('');
  const debouncedParam = useDebounce(searchParam, 1000);
  const {searchResult} = useSearchMovies(debouncedParam);

  const toggleSidebar = () => {
    sidebarModel.onOpen();
  }

  console.log('searchResult is:',searchResult);

  const ToggleIcon = () => {
    return (
      <div
        className="
          flex
          flex-row
          gap-3
          p-2
          items-center
        "
      >
        <div
          className="
            cursor-pointer 
            lg:hidden
          "
          onClick={toggleSidebar}
        >
          <FaAlignJustify size={25} />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col relative z-10 min-h-screen bg-neutral-200">
      <LoginModal />
      <RegisterModal />
      <ToggleIcon />
      <SideBar />
      <NavBar setSearchParam = {setSearchParam}/>
      <SearchResultModal searchResult={searchResult}/>
      <div className="">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ minHeight: '100vh' }}>
        <ContextProvider>
          <LayoutBody 
            children={children} 
          />
        </ContextProvider>
      </body>
    </html>
  );
}

