import {ChevronDown} from 'lucide-react';
import {Button} from "@/components/ui/button.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {ModeToggle} from "@/components/Theme/mode-toggle.tsx";

interface NavItem {
    title: string;
    href: string;
    dropdown?: { title: string; href: string }[];
}

const Navigation = () => {
    const navigation: NavItem[] = [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'Products',
            href: '/products',
        },
        {
            title: 'About',
            href: '/about',
        },
        {
            title: 'Contact',
            href: '/contact',
        },
    ];

    return (
        <nav className="flex items-center space-x-4">
            {navigation.map((item, index) =>
                item.dropdown ? (
                    <DropdownMenu key={index}>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost">
                                {item.title} <ChevronDown className="ml-2 h-4 w-4"/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                <DropdownMenuItem key={dropdownIndex} asChild>
                                    <a href={dropdownItem.href}>{dropdownItem.title}</a>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <a
                        key={index}
                        href={item.href}
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        {item.title}
                    </a>
                )
            )}
            <ModeToggle/>
        </nav>
    );
};

export default Navigation;