import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vicomtes de Béarn – Mémoire du Béarn",
}

export default function VicomtesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
