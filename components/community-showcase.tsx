"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Heart, MessageCircle, Share2, ExternalLink, Github, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const communityPosts = [
  {
    id: 1,
    user: {
      name: "Alex Thompson",
      username: "@alexdev",
      avatar: "/images/avatars/annette-black.png",
    },
    content:
      "Just shipped a full-stack app in 2 hours using Pointer's AI agents! The parallel coding feature is a game-changer 🚀",
    image: "/placeholder.svg?height=300&width=500",
    likes: 234,
    comments: 45,
    shares: 12,
    timestamp: "2h ago",
    tags: ["#PointerAI", "#WebDev", "#AI"],
  },
  {
    id: 2,
    user: {
      name: "Maria Garcia",
      username: "@mariacodes",
      avatar: "/images/avatars/dianne-russell.png",
    },
    content: "The real-time collaboration in Pointer is incredible. My team's productivity has increased by 300%! 💪",
    image: "/placeholder.svg?height=300&width=500",
    likes: 189,
    comments: 32,
    shares: 8,
    timestamp: "4h ago",
    tags: ["#TeamWork", "#Productivity", "#PointerAI"],
  },
  {
    id: 3,
    user: {
      name: "David Kim",
      username: "@davidbuilds",
      avatar: "/images/avatars/cameron-williamson.png",
    },
    content:
      "From idea to deployment in minutes. Pointer's Vercel integration is seamless! Check out my latest project:",
    image: "/placeholder.svg?height=300&width=500",
    likes: 156,
    comments: 28,
    shares: 15,
    timestamp: "6h ago",
    tags: ["#Deployment", "#Vercel", "#PointerAI"],
  },
  {
    id: 4,
    user: {
      name: "Sarah Johnson",
      username: "@sarahcodes",
      avatar: "/images/avatars/darlene-robertson.png",
    },
    content: "AI code reviews caught 3 critical bugs before deployment. Pointer literally saved my weekend! 🙏",
    likes: 298,
    comments: 67,
    shares: 23,
    timestamp: "8h ago",
    tags: ["#CodeReview", "#BugFree", "#PointerAI"],
  },
]

const CommunityPost = ({ post, index }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
  }

  return (
    <motion.div
      className="glass-effect border border-glass-border rounded-2xl p-6 hover-lift"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* User Header */}
      <div className="flex items-center gap-3 mb-4">
        <Image
          src={post.user.avatar || "/placeholder.svg"}
          alt={post.user.name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-foreground">{post.user.name}</h4>
          <p className="text-sm text-muted-foreground">
            {post.user.username} • {post.timestamp}
          </p>
        </div>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>

      {/* Content */}
      <p className="text-foreground mb-4 leading-relaxed">{post.content}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Image */}
      {post.image && (
        <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt="Community post image" fill className="object-cover" />
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-glass-border">
        <div className="flex items-center gap-6">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 transition-colors ${
              isLiked ? "text-red-500" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
            <span className="text-sm font-medium">{likes}</span>
          </button>

          <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium">{post.comments}</span>
          </button>

          <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Share2 className="w-5 h-5" />
            <span className="text-sm font-medium">{post.shares}</span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export function CommunityShowcase() {
  return (
    <section className="w-full px-5 py-16 md:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Community Spotlight</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            See what amazing projects our community is building with Pointer AI. Join thousands of developers creating
            the future.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" className="glass-effect border-glass-border hover:bg-glass bg-transparent">
              <Github className="w-4 h-4 mr-2" />
              Follow on GitHub
            </Button>
            <Button variant="outline" className="glass-effect border-glass-border hover:bg-glass bg-transparent">
              <Twitter className="w-4 h-4 mr-2" />
              Join Twitter
            </Button>
          </div>
        </motion.div>

        {/* Community Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {communityPosts.map((post, index) => (
            <CommunityPost key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover-lift glow-effect">
            Share Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
