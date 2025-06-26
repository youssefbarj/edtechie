"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  CheckCircle,
  Calculator,
  AlertTriangle,
  Zap,
  BarChart3,
  FileText,
  Settings,
  Star,
  Clock,
  Shield,
  X,
  Upload,
  ArrowRight,
  ArrowLeft,
  FileCheck,
} from "lucide-react"

export function ResourceGrid() {
  // Modal states
  const [showAssessment, setShowAssessment] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)
  const [showCostAnalysis, setShowCostAnalysis] = useState(false)
  const [showUpload, setShowUpload] = useState(false)

  // Assessment states
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [assessmentComplete, setAssessmentComplete] = useState(false)
  const [assessmentScore, setAssessmentScore] = useState(0)

  // Calculator states
  const [calculatorData, setCalculatorData] = useState({
    employeeCount: "",
    currentTrainingCost: "",
    completionRate: "",
    averageWage: "",
  })
  const [calculatorResults, setCalculatorResults] = useState(null)

  // Cost analysis states
  const [costData, setCostData] = useState({
    industry: "",
    companySize: "",
    currentFailureRate: "",
  })
  const [costResults, setCostResults] = useState(null)

  // Upload states
  const [uploadedFile, setUploadedFile] = useState(null)
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    company: "",
  })
  const [uploadComplete, setUploadComplete] = useState(false)

  // Assessment questions
  const assessmentQuestions = [
    {
      question: "What's your current training completion rate?",
      options: [
        "Below 40% (Most people don't finish)",
        "40-60% (About half complete it)",
        "60-80% (Most people finish)",
        "Above 80% (Nearly everyone completes)",
      ],
      scores: [1, 2, 3, 4],
      insight: "completion_rate",
    },
    {
      question: "How do employees access your training content?",
      options: [
        "PDF downloads and documents",
        "PowerPoint presentations",
        "Basic LMS with static content",
        "Interactive platform with engagement",
      ],
      scores: [1, 2, 3, 4],
      insight: "delivery_method",
    },
    {
      question: "How often do you update your training materials?",
      options: ["Rarely or never", "Once per year", "Twice per year", "Quarterly or more often"],
      scores: [1, 2, 3, 4],
      insight: "content_freshness",
    },
    {
      question: "How do you measure training effectiveness?",
      options: [
        "We don't measure it",
        "Completion tracking only",
        "Basic quizzes at the end",
        "Comprehensive analytics and behavior change",
      ],
      scores: [1, 2, 3, 4],
      insight: "measurement",
    },
    {
      question: "What's your biggest training challenge?",
      options: [
        "People don't complete training",
        "Content is boring and outdated",
        "No way to prove ROI",
        "Takes too long to create new content",
      ],
      scores: [1, 1, 1, 1],
      insight: "main_challenge",
    },
    {
      question: "How long does it take to create new training content?",
      options: [
        "Months (we avoid creating new content)",
        "6-8 weeks with external help",
        "3-4 weeks with internal team",
        "1-2 weeks with modern tools",
      ],
      scores: [1, 2, 3, 4],
      insight: "creation_speed",
    },
    {
      question: "What type of training content do you need most?",
      options: [
        "Compliance (HIPAA, OSHA, SOX, etc.)",
        "Safety and risk management",
        "HR policies and procedures",
        "Technical skills and processes",
      ],
      scores: [1, 1, 1, 1],
      insight: "content_type",
    },
    {
      question: "How engaged are employees during training?",
      options: [
        "They clearly zone out or multitask",
        "They get through it but don't seem interested",
        "Mixed - some engaged, some not",
        "Generally engaged and asking questions",
      ],
      scores: [1, 2, 3, 4],
      insight: "engagement_level",
    },
  ]

  const primaryLeadMagnets = [
    {
      title: "Is Your Compliance Training Stuck in 2015?",
      description: "5-minute assessment reveals why your training isn't working + get personalized improvement roadmap",
      type: "Assessment Tool",
      icon: CheckCircle,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-500/30",
      hoverBorder: "hover:border-green-400/70",
      cta: "Take Free Assessment",
      ctaStyle: "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700",
      badge: "45% Conversion Rate",
      badgeColor: "bg-green-500/20 text-green-300 border-green-500/30",
      action: () => setShowAssessment(true),
    },
    {
      title: "Training Transformation ROI Calculator",
      description:
        "Calculate exact savings with Morocco-based delivery vs traditional agencies. See why companies save 60-80% with EdTechie.",
      type: "ROI Calculator",
      icon: Calculator,
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-500/30",
      hoverBorder: "hover:border-blue-400/70",
      cta: "Calculate Your Savings",
      ctaStyle: "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700",
      badge: "Most Popular",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      popular: true,
      action: () => setShowCalculator(true),
    },
    {
      title: "Hidden Cost of Boring Training Calculator",
      description:
        "Organizations lose $1.6M annually from compliance failures. Discover your hidden costs + risk exposure.",
      type: "Risk Assessment",
      icon: AlertTriangle,
      color: "text-red-400",
      bgColor: "bg-red-900/20",
      borderColor: "border-red-500/30",
      hoverBorder: "hover:border-red-400/70",
      cta: "Reveal Hidden Costs",
      ctaStyle: "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700",
      urgency: "Limited Time Analysis",
      action: () => setShowCostAnalysis(true),
    },
    {
      title: "Transform Your Worst PDF Free (48-Hour Results)",
      description:
        "Upload your most boring training PDF. We'll transform it into interactive content - completely free, no commitment.",
      type: "Free Sample",
      icon: Zap,
      color: "text-yellow-400",
      bgColor: "bg-yellow-900/20",
      borderColor: "border-yellow-500/30",
      hoverBorder: "hover:border-yellow-400/70",
      cta: "Get Free Transformation",
      ctaStyle: "bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700",
      subText: "No Credit Card Required",
      urgency: "48-Hour Delivery",
      action: () => setShowUpload(true),
    },
  ]

  const secondaryResources = [
    {
      title: "2025 Training Effectiveness Report",
      description: "Exclusive data: Interactive vs static training performance across industries",
      type: "Research Report",
      icon: BarChart3,
      color: "text-purple-400",
      cta: "Download Report",
    },
    {
      title: "Industry-Specific Transformation Templates",
      description: "Ready-to-use templates for HR, safety, financial, and healthcare compliance",
      type: "Template Library",
      icon: FileText,
      color: "text-cyan-400",
      cta: "Browse Templates",
    },
    {
      title: "LMS Integration Playbook",
      description: "Technical guide for deploying transformed content across popular learning platforms",
      type: "Technical Guide",
      icon: Settings,
      color: "text-slate-400",
      cta: "Get Integration Guide",
    },
  ]

  // Assessment functions
  const handleAnswerSelect = (questionIndex, answerIndex) => {
    const newAnswers = { ...answers }
    newAnswers[questionIndex] = {
      answer: answerIndex,
      score: assessmentQuestions[questionIndex].scores[answerIndex],
      insight: assessmentQuestions[questionIndex].insight,
    }
    setAnswers(newAnswers)
  }

  const calculateAssessmentScore = () => {
    const totalScore = Object.values(answers).reduce((sum, answer) => sum + answer.score, 0)
    const maxScore =
      assessmentQuestions.filter((q) => q.insight !== "main_challenge" && q.insight !== "content_type").length * 4
    return Math.round((totalScore / maxScore) * 100)
  }

  const getAssessmentRecommendation = (score) => {
    if (score < 40) {
      return {
        level: "Critical - Immediate Action Needed",
        color: "text-red-400",
        bgColor: "bg-red-900/20",
        recommendation:
          "Your training system needs urgent transformation. You're likely losing significant money through poor completion rates and compliance failures.",
        nextStep: "Schedule an emergency consultation to prevent further losses.",
      }
    } else if (score < 60) {
      return {
        level: "Needs Improvement - Quick Wins Available",
        color: "text-yellow-400",
        bgColor: "bg-yellow-900/20",
        recommendation:
          "Your training has potential but significant gaps. Interactive transformation could double your effectiveness.",
        nextStep: "Start with our Enhanced Package to see immediate improvements.",
      }
    } else if (score < 80) {
      return {
        level: "Good Foundation - Optimization Opportunities",
        color: "text-blue-400",
        bgColor: "bg-blue-900/20",
        recommendation: "You're doing well but missing opportunities for higher engagement and better ROI.",
        nextStep: "Consider Premium Package for advanced interactivity.",
      }
    } else {
      return {
        level: "Excellent - Fine-Tuning for Perfection",
        color: "text-green-400",
        bgColor: "bg-green-900/20",
        recommendation: "Your training system is strong. Custom development could push you to industry-leading status.",
        nextStep: "Explore Custom Development for competitive advantage.",
      }
    }
  }

  const completeAssessment = () => {
    const score = calculateAssessmentScore()
    setAssessmentScore(score)
    setAssessmentComplete(true)
  }

  // ROI Calculator functions
  const calculateROI = () => {
    const employees = Number.parseInt(calculatorData.employeeCount) || 0
    const currentCost = Number.parseInt(calculatorData.currentTrainingCost) || 0
    const currentCompletion = Number.parseInt(calculatorData.completionRate) || 0
    const avgWage = Number.parseInt(calculatorData.averageWage) || 0

    // EdTechie savings calculations
    const moroccanSavings = currentCost * 0.65 // 65% cost savings
    const completionImprovement = (85 - currentCompletion) / 100
    const productivityGains = employees * avgWage * 0.15 * completionImprovement
    const complianceRiskReduction = employees * 500 // $500 per employee risk reduction

    const totalROI = moroccanSavings + productivityGains + complianceRiskReduction
    const paybackMonths = Math.ceil((currentCost * 0.35) / (totalROI / 12))

    setCalculatorResults({
      costSavings: moroccanSavings,
      productivityGains,
      complianceRiskReduction,
      totalROI,
      paybackMonths,
      currentCost,
      newCost: currentCost * 0.35,
    })
  }

  // Cost Analysis functions
  const calculateHiddenCosts = () => {
    const size = Number.parseInt(costData.companySize) || 0
    const failureRate = Number.parseInt(costData.currentFailureRate) || 0

    const industryCosts = {
      healthcare: { base: 1600000, perEmployee: 2400 },
      finance: { base: 2800000, perEmployee: 3200 },
      manufacturing: { base: 980000, perEmployee: 1800 },
      corporate: { base: 750000, perEmployee: 1200 },
    }

    const costs = industryCosts[costData.industry] || industryCosts.corporate
    const annualRisk = costs.base + size * costs.perEmployee
    const currentRisk = annualRisk * (failureRate / 100)
    const turnoverCost = size * 15000 * 0.34 // 34% higher turnover from poor training
    const productivityLoss = size * 50000 * 0.23 // 23% productivity loss

    setCostResults({
      annualRisk,
      currentRisk,
      turnoverCost,
      productivityLoss,
      totalHiddenCost: currentRisk + turnoverCost + productivityLoss,
    })
  }

  // File upload functions
  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file && file.type === "application/pdf") {
      setUploadedFile(file)
    }
  }

  const submitTransformation = () => {
    // In real implementation, this would upload the file and send emails
    setUploadComplete(true)
    // Simulate API call
    setTimeout(() => {
      alert("Your PDF has been submitted! Check your email for the transformation preview within 48 hours.")
    }, 1000)
  }

  // Modal component
  const ResourceModal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-slate-900 border border-slate-700 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">{title}</h2>
              <Button variant="ghost" size="sm" onClick={onClose} className="text-slate-400 hover:text-white">
                <X className="w-6 h-6" />
              </Button>
            </div>
            {children}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Free Content Transformation Resources</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Interactive tools, assessments, and transformation samples to help you build engaging content that actually
            works across all compliance areas.
          </p>
        </div>

        {/* Primary Lead Magnets - 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {primaryLeadMagnets.map((resource, index) => (
            <Card
              key={index}
              className={`relative ${resource.bgColor} ${resource.borderColor} ${resource.hoverBorder} transition-all duration-300 group transform hover:scale-105 hover:shadow-2xl cursor-pointer h-full`}
            >
              {/* Popular Badge */}
              {resource.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg">
                    <Star className="w-4 h-4" />
                    <span>{resource.badge}</span>
                  </div>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-full ${resource.bgColor} border ${resource.borderColor}`}>
                      <resource.icon className={`w-8 h-8 ${resource.color}`} />
                    </div>
                    <div>
                      <span className={`text-sm font-medium ${resource.color} bg-slate-800/50 px-2 py-1 rounded-full`}>
                        {resource.type}
                      </span>
                    </div>
                  </div>
                  {resource.urgency && (
                    <div className="flex items-center space-x-1 bg-slate-800/50 px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3 text-orange-400" />
                      <span className="text-xs text-orange-300">{resource.urgency}</span>
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors leading-tight">
                  {resource.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6 flex-1 flex flex-col">
                <p className="text-slate-300 text-sm leading-relaxed flex-1">{resource.description}</p>

                {/* Badge for non-popular items */}
                {resource.badge && !resource.popular && (
                  <div
                    className={`inline-flex items-center space-x-1 ${resource.badgeColor} px-3 py-1 rounded-full text-sm font-medium border w-fit`}
                  >
                    <Shield className="w-4 h-4" />
                    <span>{resource.badge}</span>
                  </div>
                )}

                <div className="space-y-3">
                  <Button
                    onClick={resource.action}
                    className={`w-full ${resource.ctaStyle} text-white font-semibold py-3 text-base transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    {resource.cta}
                  </Button>
                  {resource.subText && <p className="text-center text-xs text-slate-400">{resource.subText}</p>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Secondary Resources - 3 Column Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Additional Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {secondaryResources.map((resource, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <resource.icon className={`w-6 h-6 ${resource.color}`} />
                    <span className={`text-sm font-medium ${resource.color}`}>{resource.type}</span>
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-cyan-400 transition-colors">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-400 text-sm">{resource.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-cyan-500 transition-all duration-300"
                  >
                    {resource.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-800 to-slate-700 border-2 border-transparent bg-clip-padding rounded-lg p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-lg opacity-20"></div>
          <div className="absolute inset-[2px] bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Need Something Custom for Your Industry?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Can't find exactly what you're looking for? Our content transformation experts can create custom
              assessments, ROI models, and transformation samples for your specific compliance requirements and industry
              challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Request Custom Resource
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-500 text-slate-300 hover:bg-slate-700 hover:border-cyan-500 px-8 py-4 transition-all duration-300"
              >
                Schedule Consultation
              </Button>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              Custom resources typically delivered within 5-7 business days • No commitment required
            </p>
          </div>
        </div>
      </div>

      {/* Assessment Modal */}
      <ResourceModal
        isOpen={showAssessment}
        onClose={() => {
          setShowAssessment(false)
          setCurrentQuestion(0)
          setAnswers({})
          setAssessmentComplete(false)
        }}
        title="Is Your Training Stuck in 2015?"
      >
        {!assessmentComplete ? (
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="w-full bg-slate-800 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / assessmentQuestions.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-slate-400 text-sm">
              Question {currentQuestion + 1} of {assessmentQuestions.length}
            </p>

            {/* Current Question */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">{assessmentQuestions[currentQuestion].question}</h3>
              <div className="space-y-3">
                {assessmentQuestions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={`w-full text-left justify-start p-4 h-auto border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-green-500 transition-all duration-300 ${
                      answers[currentQuestion]?.answer === index ? "bg-green-900/30 border-green-500" : ""
                    }`}
                    onClick={() => handleAnswerSelect(currentQuestion, index)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              {currentQuestion === assessmentQuestions.length - 1 ? (
                <Button
                  onClick={completeAssessment}
                  disabled={!answers[currentQuestion]}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  Get My Results
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={() => setCurrentQuestion(currentQuestion + 1)}
                  disabled={!answers[currentQuestion]}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Results */}
            <div className="text-center">
              <div className="text-6xl font-bold text-green-400 mb-4">{assessmentScore}%</div>
              <h3 className="text-2xl font-bold text-white mb-2">Training Effectiveness Score</h3>
            </div>

            {/* Recommendation */}
            <div
              className={`${getAssessmentRecommendation(assessmentScore).bgColor} border border-green-500/30 rounded-lg p-6`}
            >
              <h4 className={`text-lg font-semibold ${getAssessmentRecommendation(assessmentScore).color} mb-3`}>
                {getAssessmentRecommendation(assessmentScore).level}
              </h4>
              <p className="text-slate-300 mb-4">{getAssessmentRecommendation(assessmentScore).recommendation}</p>
              <p className="text-green-400 font-semibold">
                Next Step: {getAssessmentRecommendation(assessmentScore).nextStep}
              </p>
            </div>

            {/* Lead Capture */}
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Get Your Detailed Report</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <Input placeholder="Your Name" className="bg-slate-700 border-slate-600 text-white" />
                <Input placeholder="Work Email" type="email" className="bg-slate-700 border-slate-600 text-white" />
              </div>
              <Input placeholder="Company Name" className="bg-slate-700 border-slate-600 text-white mb-4" />
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                Send My Detailed Assessment Report
              </Button>
            </div>
          </div>
        )}
      </ResourceModal>

      {/* ROI Calculator Modal */}
      <ResourceModal
        isOpen={showCalculator}
        onClose={() => {
          setShowCalculator(false)
          setCalculatorResults(null)
        }}
        title="Training Transformation ROI Calculator"
      >
        {!calculatorResults ? (
          <div className="space-y-6">
            <p className="text-slate-300">
              Calculate your potential savings with EdTechie's Morocco-based content transformation services.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Number of Employees</label>
                  <Input
                    type="number"
                    placeholder="e.g., 500"
                    value={calculatorData.employeeCount}
                    onChange={(e) => setCalculatorData({ ...calculatorData, employeeCount: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Current Annual Training Cost ($)
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g., 100000"
                    value={calculatorData.currentTrainingCost}
                    onChange={(e) => setCalculatorData({ ...calculatorData, currentTrainingCost: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Current Completion Rate (%)</label>
                  <Input
                    type="number"
                    placeholder="e.g., 45"
                    value={calculatorData.completionRate}
                    onChange={(e) => setCalculatorData({ ...calculatorData, completionRate: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Average Employee Wage ($)</label>
                  <Input
                    type="number"
                    placeholder="e.g., 65000"
                    value={calculatorData.averageWage}
                    onChange={(e) => setCalculatorData({ ...calculatorData, averageWage: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
              </div>
            </div>

            <Button
              onClick={calculateROI}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              disabled={!calculatorData.employeeCount || !calculatorData.currentTrainingCost}
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calculate My ROI
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Your ROI Calculation Results</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-300 mb-4">Current Situation</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Annual Training Cost:</span>
                    <span className="text-white font-semibold">${calculatorResults.currentCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Completion Rate:</span>
                    <span className="text-white font-semibold">{calculatorData.completionRate}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-300 mb-4">With EdTechie</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">New Training Cost:</span>
                    <span className="text-white font-semibold">${calculatorResults.newCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Expected Completion:</span>
                    <span className="text-white font-semibold">85%+</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-blue-300 mb-4">Annual Savings Breakdown</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Direct Cost Savings (65%):</span>
                  <span className="text-2xl font-bold text-green-400">
                    ${calculatorResults.costSavings.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Productivity Gains:</span>
                  <span className="text-xl font-bold text-blue-400">
                    ${calculatorResults.productivityGains.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Compliance Risk Reduction:</span>
                  <span className="text-xl font-bold text-cyan-400">
                    ${calculatorResults.complianceRiskReduction.toLocaleString()}
                  </span>
                </div>
                <hr className="border-slate-600" />
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Total Annual ROI:</span>
                  <span className="text-3xl font-bold text-green-400">
                    ${calculatorResults.totalROI.toLocaleString()}
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-slate-400">Payback Period: </span>
                  <span className="text-lg font-semibold text-yellow-400">
                    {calculatorResults.paybackMonths} months
                  </span>
                </div>
              </div>
            </div>

            {/* Lead Capture */}
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Get Your Detailed ROI Report</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <Input placeholder="Your Name" className="bg-slate-700 border-slate-600 text-white" />
                <Input placeholder="Work Email" type="email" className="bg-slate-700 border-slate-600 text-white" />
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                Send My ROI Analysis & Schedule Consultation
              </Button>
            </div>
          </div>
        )}
      </ResourceModal>

      {/* Cost Analysis Modal */}
      <ResourceModal
        isOpen={showCostAnalysis}
        onClose={() => {
          setShowCostAnalysis(false)
          setCostResults(null)
        }}
        title="Hidden Cost of Boring Training"
      >
        {!costResults ? (
          <div className="space-y-6">
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-300 mb-3">The Hidden Reality</h3>
              <p className="text-slate-300 text-sm">
                Poor training doesn't just waste money - it creates massive hidden costs through compliance failures,
                higher turnover, and lost productivity. Most organizations have no idea how much this is costing them.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Your Industry</label>
                <select
                  value={costData.industry}
                  onChange={(e) => setCostData({ ...costData, industry: e.target.value })}
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-md px-3 py-2"
                >
                  <option value="">Select your industry</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Financial Services</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="corporate">Corporate/General</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Company Size (Number of Employees)
                </label>
                <Input
                  type="number"
                  placeholder="e.g., 500"
                  value={costData.companySize}
                  onChange={(e) => setCostData({ ...costData, companySize: e.target.value })}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Estimated Training Failure Rate (%)
                </label>
                <Input
                  type="number"
                  placeholder="e.g., 60 (if 60% don't complete or retain training)"
                  value={costData.currentFailureRate}
                  onChange={(e) => setCostData({ ...costData, currentFailureRate: e.target.value })}
                  className="bg-slate-700 border-slate-600 text-white"
                />
                <p className="text-xs text-slate-400 mt-1">Industry average is 67% for compliance training</p>
              </div>
            </div>

            <Button
              onClick={calculateHiddenCosts}
              className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
              disabled={!costData.industry || !costData.companySize || !costData.currentFailureRate}
            >
              <AlertTriangle className="w-4 h-4 mr-2" />
              Reveal My Hidden Costs
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Your Hidden Cost Analysis</h3>
              <div className="text-4xl font-bold text-red-400 mb-4">
                ${costResults.totalHiddenCost.toLocaleString()}
              </div>
              <p className="text-slate-300">Annual hidden cost of poor training</p>
            </div>

            <div className="space-y-4">
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Compliance Risk Exposure:</span>
                  <span className="text-lg font-bold text-red-400">${costResults.currentRisk.toLocaleString()}</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Based on {costData.currentFailureRate}% failure rate in {costData.industry}
                </p>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Higher Turnover Costs:</span>
                  <span className="text-lg font-bold text-yellow-400">
                    ${costResults.turnoverCost.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">34% higher turnover from poor training engagement</p>
              </div>

              <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Productivity Loss:</span>
                  <span className="text-lg font-bold text-orange-400">
                    ${costResults.productivityLoss.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">23% productivity loss from inadequate training</p>
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-green-300 mb-3">The EdTechie Solution</h4>
              <p className="text-slate-300 text-sm mb-4">
                Interactive training reduces these hidden costs by 70-85% through higher completion rates, better
                retention, and improved compliance outcomes.
              </p>
              <div className="text-center">
                <span className="text-slate-400">Potential Annual Savings: </span>
                <span className="text-2xl font-bold text-green-400">
                  ${Math.round(costResults.totalHiddenCost * 0.75).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Lead Capture */}
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Get Your Risk Reduction Plan</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <Input placeholder="Your Name" className="bg-slate-700 border-slate-600 text-white" />
                <Input placeholder="Work Email" type="email" className="bg-slate-700 border-slate-600 text-white" />
              </div>
              <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                Send My Risk Analysis & Reduction Strategy
              </Button>
            </div>
          </div>
        )}
      </ResourceModal>

      {/* PDF Upload Modal */}
      <ResourceModal
        isOpen={showUpload}
        onClose={() => {
          setShowUpload(false)
          setUploadedFile(null)
          setUploadComplete(false)
        }}
        title="Transform Your Worst PDF Free"
      >
        {!uploadComplete ? (
          <div className="space-y-6">
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-300 mb-3">48-Hour Free Transformation</h3>
              <p className="text-slate-300 text-sm">
                Upload your most boring training PDF (max 10 pages) and we'll transform it into interactive content
                completely free. No credit card required, no commitment needed.
              </p>
            </div>

            {!uploadedFile ? (
              <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Upload Your PDF</h4>
                <p className="text-slate-400 text-sm mb-4">
                  Choose your most boring training document (max 10 pages, PDF format)
                </p>
                <input type="file" accept=".pdf" onChange={handleFileUpload} className="hidden" id="pdf-upload" />
                <label
                  htmlFor="pdf-upload"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold rounded-lg cursor-pointer transition-all duration-300"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Choose PDF File
                </label>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <FileCheck className="w-6 h-6 text-green-400" />
                    <div>
                      <h4 className="text-white font-semibold">{uploadedFile.name}</h4>
                      <p className="text-slate-400 text-sm">
                        {Math.round(uploadedFile.size / 1024)} KB • Ready for transformation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Your Contact Information</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Your Name"
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                      <Input
                        placeholder="Work Email"
                        type="email"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    <Input
                      placeholder="Company Name"
                      value={contactInfo.company}
                      onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                    <Textarea
                      placeholder="What makes this PDF particularly boring? (Optional)"
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>

                <Button
                  onClick={submitTransformation}
                  disabled={!contactInfo.name || !contactInfo.email}
                  className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold py-3"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Transform My PDF Free (48 Hours)
                </Button>
              </div>
            )}

            <div className="text-center text-xs text-slate-500">
              <p>✓ No credit card required ✓ No commitment ✓ 48-hour delivery ✓ Keep all rights to your content</p>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Transformation Submitted!</h3>
              <p className="text-slate-300">
                Your PDF has been received and is being processed by our transformation team.
              </p>
            </div>
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
              <h4 className="text-green-300 font-semibold mb-3">What Happens Next:</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <p>✓ Our team reviews your PDF within 2 hours</p>
                <p>✓ We create an interactive transformation sample</p>
                <p>✓ You receive the preview within 48 hours</p>
                <p>✓ Optional consultation to discuss full transformation</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">Check your email for confirmation and tracking information.</p>
          </div>
        )}
      </ResourceModal>
    </section>
  )
}
