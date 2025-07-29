
import {
  ChefHat,
  Coffee,
  Utensils,
  Wine,
} from "lucide-react";
import { MenuCategory } from "../types/menu";

export const menuData: MenuCategory[] = [
  {
    id: "signature",
    title: "Signature Pork",
    icon: ChefHat,
    gradient: "from-red-500 to-orange-600",
    items: [
      {
        name: "BBQ Pork Ribs",
        description: "Slow-cooked tender ribs glazed with our signature BBQ sauce",
        price: "$18.99",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2940&auto=format&fit=crop",
        featured: true,
      },
      {
        name: "Pulled Pork Sandwich",
        description: "Smoky pulled pork with coleslaw on a brioche bun",
        price: "$14.99",
        image: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?q=80&w=2940&auto=format&fit=crop",
      },
      {
        name: "Pork Belly Bites",
        description: "Crispy pork belly cubes with spicy honey glaze",
        price: "$16.99",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2940&auto=format&fit=crop",
        featured: true,
      },
      {
        name: "Korean Pork Bulgogi",
        description: "Marinated pork with vegetables and steamed rice",
        price: "$15.99",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=2940&auto=format&fit=crop",
      },
      {
        name: "Pork Carnitas Tacos",
        description: "Three soft tacos with slow-cooked pork and fresh salsa",
        price: "$13.99",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=2940&auto=format&fit=crop",
      },
      {
        name: "Honey Glazed Ham Steak",
        description: "Thick-cut ham steak with sweet honey glaze",
        price: "$17.99",
        image: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?q=80&w=2940&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "sides",
    title: "Sides & Appetizers",
    icon: Utensils,
    gradient: "from-orange-500 to-red-600",
    items: [
      {
        name: "Mac & Cheese",
        description: "Creamy three-cheese macaroni with crispy breadcrumbs",
        price: "$8.99",
        image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?q=80&w=2940&auto=format&fit=crop",
      },
      {
        name: "Loaded Potato Skins",
        description: "Crispy potato skins with bacon, cheese, and sour cream",
        price: "$9.99",
        image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?q=80&w=2940&auto=format&fit=crop",
      },
      {
        name: "Coleslaw",
        description: "Fresh cabbage slaw with tangy dressing",
        price: "$5.99",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=2940&auto=format&fit=crop",
      },
      {
        name: "Baked Beans",
        description: "Slow-cooked beans in sweet barbecue sauce",
        price: "$6.99",
        image: "https://images.unsplash.com/photo-1571197019214-0d4f9bb8eb33?q=80&w=2940&auto=format&fit=crop",
      },
      {
        name: "Cornbread",
        description: "Sweet and buttery homemade cornbread",
        price: "$4.99",
        image: "https://images.unsplash.com/photo-1513618364-e9500335c874?q=80&w=2940&auto=format&fit=crop",
      },
      {
        name: "Onion Rings",
        description: "Beer-battered crispy onion rings with ranch dip",
        price: "$7.99",
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=2940&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    icon: Coffee,
    gradient: "from-red-500 to-orange-600",
    items: [
      {
        name: "Craft Root Beer",
        description: "House-made root beer with vanilla notes",
        price: "$4.99",
        image: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?q=80&w=2940&auto=format&fit=crop",
      },
      {
        name: "Sweet Tea",
        description: "Traditional Southern sweet iced tea",
        price: "$3.99",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=2940&auto=format&fit=crop",
        featured: true,
      },
      {
        name: "Fresh Lemonade",
        description: "Hand-squeezed lemonade with mint",
        price: "$4.49",
        image: "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?q=80&w=2940&auto=format&fit=crop",
      },
      {
        name: "Coffee",
        description: "Freshly brewed premium coffee",
        price: "$2.99",
        image: "https://images.unsplash.com/photo-1517228343949-d7b69c6f2a89?q=80&w=2940&auto=format&fit=crop",
      },
      {
        name: "Soda Selection",
        description: "Coca-Cola, Pepsi, Sprite, Dr. Pepper",
        price: "$2.99",
        image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?q=80&w=2940&auto=format&fit=crop",
      },
      {
        name: "Milkshakes",
        description: "Vanilla, chocolate, or strawberry milkshakes",
        price: "$6.99",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=2940&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "desserts",
    title: "Sweet Endings",
    icon: Wine,
    gradient: "from-orange-500 to-red-600",
    items: [
      {
        name: "Apple Pie",
        description: "Classic apple pie with vanilla ice cream",
        price: "$7.99",
        image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e9b5?q=80&w=2940&auto=format&fit=crop",
      },
      {
        name: "Chocolate Brownie",
        description: "Warm fudge brownie with whipped cream",
        price: "$6.99",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=2940&auto=format&fit=crop",
      },
      {
        name: "Peach Cobbler",
        description: "Southern-style peach cobbler with cinnamon",
        price: "$8.49",
        image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?q=80&w=2940&auto=format&fit=crop",
        featured: true,
      },
      {
        name: "Banana Pudding",
        description: "Layered banana pudding with vanilla wafers",
        price: "$5.99",
        image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?q=80&w=2940&auto=format&fit=crop",
      },
      {
        name: "Key Lime Pie",
        description: "Tangy key lime pie with graham cracker crust",
        price: "$7.49",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=2940&auto=format&fit=crop",
      },
      {
        name: "Ice Cream Sundae",
        description: "Three scoops with your choice of toppings",
        price: "$6.49",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2940&auto=format&fit=crop",
      },
    ],
  },
];
