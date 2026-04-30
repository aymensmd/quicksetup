# React Bits Components - Usage Guide

This guide covers the three React Bits components integrated into your portfolio.

---

## 1. Folder Component

### Overview
An interactive folder component that opens to reveal paper items with smooth animations.

### Basic Usage
```tsx
import Folder from '@/components/Folder';

export function FolderDemo() {
  return (
    <Folder
      size={2}
      color="#5227FF"
      items={[
        <div key="1">Item 1</div>,
        <div key="2">Item 2</div>,
        <div key="3">Item 3</div>,
      ]}
    />
  );
}
```

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | string | `#5227FF` | Folder color |
| `size` | number | `1` | Scale multiplier |
| `items` | React.ReactNode[] | `[]` | Up to 3 items to render as papers |
| `className` | string | `''` | Additional CSS classes |

### Examples

**With Custom Colors:**
```tsx
<Folder color="#FF6B6B" size={1.5} />
```

**With Portfolio Items:**
```tsx
<Folder
  color="#7980fe"
  size={2.5}
  items={[
    <div className="text-xs font-semibold">React Project</div>,
    <div className="text-xs font-semibold">Node Backend</div>,
    <div className="text-xs font-semibold">UI Components</div>,
  ]}
/>
```

### Styling
The component uses CSS custom properties internally. You can override the appearance:
```css
.folder {
  --folder-color: #your-color;
  --folder-back-color: #auto-darkened;
  --paper-1: #e6e6e6;
  --paper-2: #f2f2f2;
  --paper-3: #ffffff;
}
```

---

## 2. BubbleMenu Component

### Overview
An elegant navigation menu with GSAP-powered bubble animations and responsive design.

### Basic Usage
```tsx
import BubbleMenu from '@/components/BubbleMenu';

export function MenuDemo() {
  const menuItems = [
    {
      label: 'home',
      href: '#',
      ariaLabel: 'Home',
      rotation: -8,
      hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
    },
    {
      label: 'about',
      href: '#',
      ariaLabel: 'About',
      rotation: 8,
      hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
    },
  ];

  return (
    <BubbleMenu
      logo={<span>Logo</span>}
      items={menuItems}
      menuBg="#ffffff"
      menuContentColor="#111111"
    />
  );
}
```

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | React.ReactNode \| string | — | Logo in center bubble |
| `items` | MenuItem[] | DEFAULT_ITEMS | Menu items to display |
| `menuBg` | string | `#fff` | Background color |
| `menuContentColor` | string | `#111` | Icon/text color |
| `useFixedPosition` | boolean | `false` | Use fixed positioning |
| `animationEase` | string | `back.out(1.5)` | GSAP ease function |
| `animationDuration` | number | `0.5` | Animation duration (seconds) |
| `staggerDelay` | number | `0.12` | Delay between bubble animations |
| `onMenuClick` | function | — | Callback when menu toggles |
| `className` | string | — | Additional CSS classes |
| `style` | CSSProperties | — | Inline styles |
| `menuAriaLabel` | string | `Toggle menu` | Accessibility label |

### MenuItem Interface
```tsx
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
```

### Examples

**Custom Color Scheme:**
```tsx
<BubbleMenu
  logo={<span style={{ fontWeight: 700 }}>AB</span>}
  menuBg="#1a1a1a"
  menuContentColor="#ffffff"
/>
```

**With Callback:**
```tsx
<BubbleMenu
  logo="Logo"
  onMenuClick={(isOpen) => console.log('Menu:', isOpen)}
/>
```

**Custom Animation:**
```tsx
<BubbleMenu
  animationEase="elastic.out(1.2)"
  animationDuration={0.8}
  staggerDelay={0.15}
/>
```

---

## 3. ASCIIText Component

### Overview
A creative 3D text renderer using Three.js with ASCII art overlay and shader effects.

### Basic Usage
```tsx
import ASCIIText from '@/components/ASCIIText';

export function TextDemo() {
  return (
    <ASCIIText
      text="Hello"
      enableWaves={true}
      asciiFontSize={8}
    />
  );
}
```

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | `Hello!` | Text to display |
| `enableWaves` | boolean | `true` | Enable wave animations |
| `asciiFontSize` | number | `8` | ASCII overlay font size |
| `textFontSize` | number | `200` | 3D text size |
| `planeBaseHeight` | number | `8` | 3D plane height |
| `textColor` | string | `#fdf9f3` | Text color |

### Examples

**Simple Text:**
```tsx
<ASCIIText text="Portfolio" enableWaves={false} />
```

**Large Display:**
```tsx
<ASCIIText
  text="DEV"
  textFontSize={300}
  asciiFontSize={6}
/>
```

**Custom Color:**
```tsx
<ASCIIText
  text="Code"
  textColor="#ff6b6b"
  enableWaves={true}
/>
```

### Container Requirements
The component should be placed in a container with defined dimensions:
```tsx
<div style={{ height: '600px', position: 'relative' }}>
  <ASCIIText text="Your Text" />
</div>
```

### Performance Notes
- Renders at 60fps on modern browsers
- Uses WebGL for rendering
- CPU-intensive for large text
- Optimized for text up to 4-5 characters
- Responsive to window resizing

---

## Integration Example

Here's how these components are used in your portfolio showcase:

```tsx
<section id="showcase">
  {/* ASCII Hero */}
  <div style={{ height: '400px' }}>
    <ASCIIText text="DEV" enableWaves={true} asciiFontSize={6} />
  </div>

  {/* Folder & Menu */}
  <div className="grid md:grid-cols-2 gap-8">
    <Folder
      size={2.5}
      color="#7980fe"
      items={[...]}
    />
    <BubbleMenu
      logo={<span>RB</span>}
      menuBg="#ffffff"
    />
  </div>
</section>
```

---

## Customization & Theming

### Color Customization
All components support custom colors through props:
```tsx
// Folder
<Folder color="#FF6B6B" />

// BubbleMenu
<BubbleMenu menuBg="#1a1a1a" menuContentColor="#fff" />

// ASCIIText
<ASCIIText textColor="#ff6b6b" />
```

### Animation Customization
Control timing and easing:
```tsx
<BubbleMenu
  animationEase="back.out(1.5)"
  animationDuration={0.5}
  staggerDelay={0.12}
/>
```

### Responsive Behavior
All components are responsive:
- **Folder**: Scales with size prop
- **BubbleMenu**: Mobile layout automatically applied
- **ASCIIText**: Responsive to container resize

---

## Dependencies

### Required Packages
```bash
npm install gsap three
```

### TypeScript Support
All components have full TypeScript support with proper type definitions.

---

## Browser Compatibility

| Component | Chrome | Firefox | Safari | Edge |
|-----------|--------|---------|--------|------|
| Folder | ✅ | ✅ | ✅ | ✅ |
| BubbleMenu | ✅ | ✅ | ✅ | ✅ |
| ASCIIText | ✅ (WebGL) | ✅ (WebGL) | ✅ (WebGL) | ✅ (WebGL) |

---

## Troubleshooting

### BubbleMenu animation not working
- Ensure GSAP is installed: `npm install gsap`
- Check browser console for errors
- Verify component has sufficient space

### ASCIIText not rendering
- Ensure WebGL is supported by browser
- Check that container has defined dimensions
- Verify Three.js is loaded

### Folder not responding to clicks
- Check CSS is properly imported
- Ensure event handlers aren't blocked by parent elements
- Verify z-index isn't conflicting

---

## Performance Tips

1. **ASCIIText**: Limit text to 4-5 characters for smooth animation
2. **BubbleMenu**: Use `useFixedPosition={true}` only when necessary
3. **Folder**: Limit items to 3 (design limit)
4. All components: Consider lazy loading for above-the-fold content

---

## License

These components are from React Bits - an open-source component library.
