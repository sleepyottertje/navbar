import Link from "next/link"

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
    <header className="m-4 flex items-center -space-x-24 rounded-none border p-4">
      <Link href="/" className="text-xl font-semibold tracking-[0.3em] uppercase">
        Maison
      </Link>
      <NavigationMenu viewport={false} className="flex-initial">
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
    </header>
  )
}
