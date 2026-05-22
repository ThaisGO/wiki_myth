import { navigation } from '@/data/navigation'

export function useNavigation(routePath: string) {

  const allLinks = navigation.flatMap(section => {
    return section.children || [section]
  })

  const currentIndex = allLinks.findIndex(
    link => link.to === routePath
  )

  const prev = currentIndex > 0
    ? allLinks[currentIndex - 1]
    : null

  const next = currentIndex < allLinks.length - 1
    ? allLinks[currentIndex + 1]
    : null

  return {
    prev,
    next
  }
}