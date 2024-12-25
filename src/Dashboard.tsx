import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Code2, Menu, Plus, RefreshCcw, Search, X } from "lucide-react";
import Sidebar from '@/components/Sidebar';
import RepositoryCard from '@/components/RepositoryCard';
import { repositories } from '@/data/repositories';
import { getLanguageColor } from '@/utils/colors';
import { Button } from './components/ui/button';
import { Separator } from './components/ui/separator';

const DashBoard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isOpen, setOpen] = useState(false);
    
    const filteredRepos = repositories.filter(repo =>
      repo.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
        <div className="flex flex-col lg:flex-row bg-background w-screen h-screen">
            {/* Sidebar for large screens */}
            <div className="overflow-auto w-full lg:w-1/6 hidden lg:block">
              <Sidebar />
            </div>
  
            {/* Top bar for small screens */}
            <div className="flex justify-between border-b p-4 lg:hidden">
                <div className="flex gap-2 items-center">
                    <Code2 className="h-8 w-8" />
                    <span className="font-bold text-lg">CodeAnt AI</span>
                </div>
                <Menu
                    onClick={() => setOpen(true)}
                    className="cursor-pointer h-8 w-8"
              />
            </div>
  
            {/* Sidebar modal for small screens */}
            {isOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex">
                <div className="w-3/4 bg-white h-full shadow-lg p-4 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-lg">Menu</span>
                        <X
                            onClick={() => setOpen(false)}
                            className="cursor-pointer h-6 w-6"
                        />
                    </div>
                    <div className="flex-1 overflow-auto">
                        <Sidebar />
                    </div>
                </div>
            <div className="flex-1" onClick={() => setOpen(false)}/></div>
        )}
  
        <div className="flex-1 overflow-auto p-4">
          <div className="max-w-6xl space-y-8 mx-auto">
            <div className="flex flex-wrap items-center justify-between">
              <h1 className="text-2xl md:text-3xl font-bold">Repositories</h1>
              <div className="flex items-center gap-2 md:gap-4 mt-4 md:mt-0">
                <Button className="bg-zinc-100 text-black border-zinc-500 hover:bg-zinc-200">
                  <RefreshCcw className="w-4 h-4" />
                  Refresh All
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4" />
                  Add Repository
                </Button>
              </div>
            </div>
  
            <div className="relative w-full md:w-1/2 lg:w-1/4 border">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search repositories..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
        
                <Separator className='my-4'/>
  
                <div className="grid grid-cols-1 lg:gap-4 gap-2">
                  {filteredRepos.map((repo) => (
                    <RepositoryCard
                      key={repo.name}
                      repo={repo}
                      getLanguageColor={getLanguageColor}
                    />
                  ))}
                </div>
              </div>
            </div>
        </div>
    );
}
  
export default DashBoard;