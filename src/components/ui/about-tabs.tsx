import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Rocket, Heart } from "lucide-react";

interface AboutTabsProps {
  className?: string;
  whoIAm: string;
  developmentPhilosophy: string;
  myJourney: string;
}

export function AboutTabs({ 
  className, 
  whoIAm, 
  developmentPhilosophy, 
  myJourney 
}: AboutTabsProps) {
  const [activeTab, setActiveTab] = useState("whoIAm");

  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className={cn("w-full", className)}
    >
      <TabsList className="grid grid-cols-3 mb-8">
        <TabsTrigger value="whoIAm" className="flex items-center gap-2">
          <Code2 className="w-4 h-4" />
          <span className="hidden md:inline">Who I Am</span>
        </TabsTrigger>
        <TabsTrigger value="myJourney" className="flex items-center gap-2">
          <Rocket className="w-4 h-4" />
          <span className="hidden md:inline">My Journey</span>
        </TabsTrigger>
        <TabsTrigger value="developmentPhilosophy" className="flex items-center gap-2">
          <Heart className="w-4 h-4" />
          <span className="hidden md:inline">Philosophy</span>
        </TabsTrigger>
      </TabsList>
      
      {/* Who I Am */}
      <TabsContent value="whoIAm" className="space-y-4">
        <div className="flex items-center mb-4">
          <Code2 className="w-8 h-8 text-primary mr-3" />
          <h3 className="text-2xl font-bold">Who I Am</h3>
        </div>
        <div className="text-muted-foreground leading-relaxed space-y-4">
          <p>{whoIAm.split('\n\n')[0]}</p>
          <p>{whoIAm.split('\n\n')[1]}</p>
        </div>
      </TabsContent>
      
      {/* My Journey */}
      <TabsContent value="myJourney" className="space-y-4">
        <div className="flex items-center mb-4">
          <Rocket className="w-8 h-8 text-primary mr-3" />
          <h3 className="text-2xl font-bold">My Journey</h3>
        </div>
        <div className="text-muted-foreground leading-relaxed space-y-4">
          <p>{myJourney.split('\n\n')[0]}</p>
          <p>{myJourney.split('\n\n')[1]}</p>
        </div>
      </TabsContent>
      
      {/* Development Philosophy */}
      <TabsContent value="developmentPhilosophy" className="space-y-4">
        <div className="flex items-center mb-4">
          <Heart className="w-8 h-8 text-primary mr-3" />
          <h3 className="text-2xl font-bold">Development Philosophy</h3>
        </div>
        <div className="text-muted-foreground leading-relaxed">
          <p>{developmentPhilosophy}</p>
        </div>
      </TabsContent>
    </Tabs>
  );
} 