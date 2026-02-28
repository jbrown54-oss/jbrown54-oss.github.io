export interface Node {
  x: number
  y: number
  vx: number
  vy: number
  baseX: number
  baseY: number
  distance: number
}

export function generateNodes(count: number, width: number, height: number): Node[] {
  return Array.from({ length: count }, () => {
    const x = Math.random() * width
    const y = Math.random() * height
    return {
      x,
      y,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      baseX: x,
      baseY: y,
      distance: 0,
    }
  })
}

export function updateNodes(nodes: Node[], width: number, height: number, time: number): void {
  nodes.forEach((node) => {
    // Gentle oscillation around base position
    const wobble = 20
    node.x = node.baseX + Math.sin(time * 0.001 + node.baseX) * wobble
    node.y = node.baseY + Math.cos(time * 0.001 + node.baseY) * wobble

    // Keep in bounds
    if (node.x < 0) node.x = width
    if (node.x > width) node.x = 0
    if (node.y < 0) node.y = height
    if (node.y > height) node.y = 0
  })
}

export function getConnectedNodes(
  nodes: Node[],
  maxDistance: number
): Array<[Node, Node]> {
  const connected: Array<[Node, Node]> = []

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x
      const dy = nodes[i].y - nodes[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < maxDistance) {
        connected.push([nodes[i], nodes[j]])
      }
    }
  }

  return connected
}

export function getNodeOpacity(distance: number, maxDistance: number): number {
  const opacity = 1 - distance / maxDistance
  return Math.max(0, Math.min(1, opacity))
}
