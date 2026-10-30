import Link from "next/link"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const links = ["Women", "Men", "Accessories", "Cart", "Contact"]

export function Navbar() {
  return (
    <header className="m-4 flex items-center gap-4 rounded-2xl border p-4">
      <Link href="/" className="text-xl font-semibold tracking-[0.3em] uppercase">
        Maison
      </Link>
      <NavigationMenu viewport={false} className="hidden flex-initial md:flex">
        <NavigationMenuList className="flex-wrap justify-start">
          {links.map((link) => (
            <NavigationMenuItem key={link}>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <a href="#">{link}</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Button className="ml-auto">Shop Now</Button>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="p-6">
          <SheetTitle>Menu</SheetTitle>
          {links.map((link) => (
            <a key={link} href="#" className="text-lg">{link}</a>
          ))}
        </SheetContent>
      </Sheet>
    </header>
  )
}
