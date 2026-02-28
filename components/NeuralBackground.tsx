'use client'

import { useEffect, useRef, useState } from 'react'
import { generateNodes, updateNodes, getConnectedNodes, getNodeOpacity, Node } from '@/lib/neural-network'

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const nodesRef = useRef<Node[]>([])
  const animationRef = useRef<number>()
  const startTimeRef = useRef<number>(Date.now())

  // Initialize nodes
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    nodesRef.current = generateNodes(60, rect.width, rect.height)
  }, [])

  // Track cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const animate = () => {
      const time = Date.now() - startTimeRef.current
      const rect = canvas.getBoundingClientRect()

      // Update canvas size if needed
      if (canvas.width !== rect.width || canvas.height !== rect.height) {
        canvas.width = rect.width
        canvas.height = rect.height
      }

      // Clear canvas
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update nodes
      updateNodes(nodesRef.current, canvas.width, canvas.height, time)

      // Draw connections
      const connections = getConnectedNodes(nodesRef.current, 150)
      connections.forEach(([node1, node2]) => {
        const dx = node1.x - node2.x
        const dy = node1.y - node2.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const opacity = getNodeOpacity(dist, 150)

        ctx.strokeStyle = `rgba(74, 144, 226, ${opacity * 0.3})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(node1.x, node1.y)
        ctx.lineTo(node2.x, node2.y)
        ctx.stroke()
      })

      // Draw nodes
      nodesRef.current.forEach((node) => {
        const cursorDx = node.x - cursorPos.x
        const cursorDy = node.y - cursorPos.y
        const cursorDist = Math.sqrt(cursorDx * cursorDx + cursorDy * cursorDy)

        // Brighter if cursor is near
        const baseOpacity = 0.6
        const cursorInfluence = Math.max(0, 1 - cursorDist / 200)
        const opacity = baseOpacity + cursorInfluence * 0.4

        ctx.fillStyle = `rgba(74, 144, 226, ${opacity})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections from cursor to nearby nodes
        if (cursorInfluence > 0) {
          ctx.strokeStyle = `rgba(74, 144, 226, ${cursorInfluence * 0.2})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(cursorPos.x, cursorPos.y)
          ctx.lineTo(node.x, node.y)
          ctx.stroke()
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [cursorPos])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  )
}
