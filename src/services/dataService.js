import pc1 from "../Images/gamerpc1.png";
import pc2 from "../Images/pc2.jpg";
import pc3 from "../Images/pc3.jpg";

import keyboard1 from "../Images/keyboard1.png";
import keyboard2 from "../Images/keyboard2.png";
import keyboard3 from "../Images/keyboard3.png";

import mouse1 from "../Images/mouse1.png";
import mouse2 from "../Images/mouse2.png";

const catalog = [
    {
        title: "Titan X Gaming PC",
        category: "PC",
        price: 1800,
        image: pc1,
        _id: 1
    },
    {
        title: "Phantom Pro Gaming PC",
        category: "PC",
        price: 2100,
        image: pc2,
        _id: 2
    },
    {
        title: "Predator Xtreme Gaming PC",
        category: "PC",
        price: 2700,
        image: pc3,
        _id: 3
    },
    {
        title: "Phoenix Keyboard",
        category: "Keyboard",
        price: 60,
        image: keyboard1,
        _id: 4
    },
    {
        title: "AriZ Keyboard",
        category: "Keyboard",
        price: 65,
        image: keyboard2,
        _id: 5
    },
    {
        title: "HJL Keyboard",
        category: "Keyboard",
        price: 70,
        image: keyboard3,
        _id: 6
    },
    {
        title: "Titan Mouse",
        category: "Mouse",
        price: 70,
        image: mouse1,
        _id: 7
    },
    {
        title: "GLD Mouse",
        category: "Mouse",
        price: 90,
        image: mouse2,
        _id: 8
    },
];

class DataService {
    getProducts() {
        return catalog;
    }
}

export default DataService;