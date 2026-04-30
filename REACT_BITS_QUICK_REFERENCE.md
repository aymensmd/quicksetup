# React Bits Components - Quick Reference

## Folder Component

```tsx
import Folder from '@/components/Folder';

<Folder
  color="#5227FF"      // Folder color
  size={1}             // Scale factor
  items={[             // Up to 3 items
    <div>Item 1</div>,
    <div>Item 2</div>,
    <div>Item 3</div>,
  ]}
  className=""         // Additional CSS
/>
```

**Key Features:**
- Click to open/close
- Animated paper items
- Magnetic hover effects
- Customizable colors

---

## BubbleMenu Component

```tsx
import BubbleMenu from '@/components/BubbleMenu';

const items = [
  {
    label: 'Home',
    href: '/',
    rotation: -8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#fff' }
  },
  // ... more items
];

<BubbleMenu
  logo={<span>Logo</span>}           // Center logo
  items={items}                      // Menu items
  menuBg="#ffffff"                   // Background
  menuContentColor="#111111"         // Text/icon color
  useFixedPosition={false}           // Fixed vs absolute
  animationEase="back.out(1.5)"     // GSAP ease
  animationDuration={0.5}            // Duration (s)
  staggerDelay={0.12}                // Stagger delay
  onMenuClick={(open) => {}}         // Callback
/>
```

**Key Features:**
- GSAP animations
- Responsive (mobile/desktop)
- Customizable styling
- Accessibility support

---

## ASCIIText Component

```tsx
import ASCIIText from '@/components/ASCIIText';

<div style={{ height: '600px', position: 'relative' }}>
  <ASCIIText
    text="Hello"              // Display text
    enableWaves={true}        // Wave animation
    asciiFontSize={8}         // ASCII overlay size
    textFontSize={200}        // 3D text size
    planeBaseHeight={8}       // Plane height
    textColor="#fdf9f3"       // Text color
  />
</div>
```

**Key Features:**
- 3D text with Three.js
- ASCII art overlay
- Wave animations
- Mouse tracking

---

## Common Props

### Colors
- `color` (Folder): Hex color
- `menuBg` (BubbleMenu): Background color
- `menuContentColor` (BubbleMenu): Text/icon color
- `textColor` (ASCIIText): Text color

### Animation
- `animationEase` (BubbleMenu): GSAP easing
- `animationDuration` (BubbleMenu): Duration in seconds
- `staggerDelay` (BubbleMenu): Delay between items
- `enableWaves` (ASCIIText): Toggle waves

### Sizing
- `size` (Folder): Scale multiplier
- `asciiFontSize` (ASCIIText): Font size
- `textFontSize` (ASCIIText): Text size

---

## GSAP Easing Options

For BubbleMenu animations:
- `"back.out(1.5)"` - Bouncy exit (default)
- `"elastic.out(1.2)"` - Elastic effect
- `"power3.out"` - Smooth
- `"bounce.out"` - Bouncy

---

## Container Requirements

### Folder
```tsx
<div style={{ width: '200px', height: '200px' }}>
  <Folder />
</div>
```

### BubbleMenu
```tsx
<div style={{ position: 'relative', height: '100px' }}>
  <BubbleMenu />
</div>
```

### ASCIIText
```tsx
<div style={{ height: '600px', position: 'relative' }}>
  <ASCIIText />
</div>
```

---

## Performance Tips

1. **ASCIIText**: Keep text to 3-4 characters
2. **BubbleMenu**: Limit to 5-6 menu items
3. **Folder**: Max 3 items (by design)
4. All: Use ResizeObserver for responsive behavior

---

## Responsive Breakpoints

- BubbleMenu desktop: 900px+
- BubbleMenu mobile: < 900px
- Folder: Responsive via size prop
- ASCIIText: ResizeObserver based

---

## TypeScript Types

```tsx
interface FolderProps {
  color?: string;
  size?: number;
  items?: React.ReactNode[];
  className?: string;
}

interface MenuItem {
  label: string;
  href: string;
  ariaLabel?: string;
  rotation?: number;
  hoverStyles?: {
    bgColor?: string;
    textColor?: string;
  };
}

interface BubbleMenuProps {
  logo?: React.ReactNode | string;
  items?: MenuItem[];
  menuBg?: string;
  menuContentColor?: string;
  useFixedPosition?: boolean;
  animationEase?: string;
  animationDuration?: number;
  staggerDelay?: number;
  onMenuClick?: (open: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  menuAriaLabel?: string;
}

interface ASCIITextProps {
  text?: string;
  enableWaves?: boolean;
  asciiFontSize?: number;
  textFontSize?: number;
  planeBaseHeight?: number;
  textColor?: string;
}
```

---

## Usage in Portfolio

All components are integrated in the showcase section at:
`http://yoursite.com/#showcase`

---

## Troubleshooting

### Not rendering?
- Check dependencies installed: `npm install gsap three`
- Verify container has dimensions
- Check browser console for errors

### Animation not working?
- GSAP: Ensure component has space
- BubbleMenu: Check z-index conflicts
- ASCIIText: Verify WebGL support

### Performance issues?
- Reduce text length (ASCIIText)
- Limit menu items (BubbleMenu)
- Check browser dev tools

---

For full documentation, see: `src/components/COMPONENTS_GUIDE.md`
