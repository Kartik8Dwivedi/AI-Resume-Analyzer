"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RatingDisplay } from "./rating-display"
import { PointsList } from "./points-list"
import { ArrowLeft, ThumbsUp, AlertTriangle, BookOpen, Users } from "lucide-react"

type AnalysisData = {
  rating: string
  goodPoints: string[]
  missingPoints: string[]
  additionalSkills: string[]
  interviewProcess: string[]
}

interface AnalysisResultsProps {
  data: AnalysisData
  onReset: () => void
}

export function AnalysisResults({ data, onReset }: AnalysisResultsProps) {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="shadow-xl border-slate-200/50 dark:border-slate-700/50 backdrop-blur-lg bg-white/70 dark:bg-slate-900/70">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center justify-between">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Resume Analysis Results
            </span>
            <RatingDisplay rating={Number.parseInt(data.rating)} />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <TabsTrigger
                value="overview"
                className="flex items-center gap-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
              >
                <ThumbsUp className="h-4 w-4" />
                <span className="hidden sm:inline">Strengths</span>
              </TabsTrigger>
              <TabsTrigger
                value="missing"
                className="flex items-center gap-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
              >
                <AlertTriangle className="h-4 w-4" />
                <span className="hidden sm:inline">Gaps</span>
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="flex items-center gap-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
              >
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Improve</span>
              </TabsTrigger>
              <TabsTrigger
                value="interview"
                className="flex items-center gap-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
              >
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Interview</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                  Your Strengths
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Here are the qualifications and skills that match the job description:
                </p>
                <PointsList
                  points={data.goodPoints}
                  icon={ThumbsUp}
                  iconColor="text-green-500"
                  bgColor="bg-green-50/70 dark:bg-green-900/20"
                />
              </motion.div>
            </TabsContent>

            <TabsContent value="missing" className="mt-0">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  Areas for Improvement
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  These are the qualifications and skills that don't match the job description:
                </p>
                <PointsList
                  points={data.missingPoints}
                  icon={AlertTriangle}
                  iconColor="text-amber-500"
                  bgColor="bg-amber-50/70 dark:bg-amber-900/20"
                />
              </motion.div>
            </TabsContent>

            <TabsContent value="skills" className="mt-0">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Skills to Develop
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Consider learning these additional skills to improve your qualifications:
                </p>
                <PointsList
                  points={data.additionalSkills}
                  icon={BookOpen}
                  iconColor="text-blue-500"
                  bgColor="bg-blue-50/70 dark:bg-blue-900/20"
                />
              </motion.div>
            </TabsContent>

            <TabsContent value="interview" className="mt-0">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                  Interview Process
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Here's what to expect in the interview process for this role:
                </p>
                <PointsList
                  points={data.interviewProcess}
                  icon={Users}
                  iconColor="text-purple-500"
                  bgColor="bg-purple-50/70 dark:bg-purple-900/20"
                />
              </motion.div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button
            onClick={onReset}
            variant="outline"
            className="w-full backdrop-blur-sm bg-white/30 dark:bg-slate-800/30 border-white/20 dark:border-slate-700/50 hover:bg-white/50 dark:hover:bg-slate-700/50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Analyze Another Resume
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
