"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, TrendingUp, Code, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI-Powered Development: 5 Trends to Watch",
    excerpt:
      "Discover how AI is reshaping the development landscape and what it means for developers in 2024 and beyond.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI Trends",
    image: "/placeholder.svg?height=200&width=400",
    icon: TrendingUp,
    featured: true,
  },
  {
    id: 2,
    title: "Building Scalable Applications with Parallel AI Agents",
    excerpt:
      "Learn how to leverage multiple AI agents to solve complex coding challenges and improve development efficiency.",
    author: "Marcus Rodriguez",
    date: "2024-01-12",
    readTime: "12 min read",
    category: "Development",
    image: "/placeholder.svg?height=200&width=400",
    icon: Code,
  },
  {
    id: 3,
    title: "Real-time Collaboration: The New Standard for Dev Teams",
    excerpt: "Explore how real-time coding previews and collaborative features are transforming team productivity.",
    author: "Emily Watson",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Collaboration",
    image: "/placeholder.svg?height=200&width=400",
    icon: Zap,
  },
]

const BlogCard = ({ post, index }) => {
  const { title, excerpt, author, date, readTime, category, image, icon: Icon, featured } = post

  return (
    <motion.article
      className={`group relative overflow-hidden rounded-2xl glass-effect border border-glass-border hover-lift cursor-pointer ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? "h-64" : "h-48"}`}>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
          <Icon className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">{category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3
          className={`font-bold text-foreground group-hover:text-primary transition-colors ${
            featured ? "text-2xl" : "text-xl"
          }`}
        >
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">{excerpt}</p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="font-medium">{author}</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>

          <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </motion.article>
  )
}

export function BlogInsightsSection() {
  return (
    <section className="w-full px-5 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Insights & Updates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Stay ahead of the curve with the latest insights on AI development, best practices, and industry trends.
          </p>
          <Button
            variant="outline"
            className="glass-effect border-glass-border hover:bg-glass hover-lift bg-transparent"
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
