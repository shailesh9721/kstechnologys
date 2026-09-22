import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'

const CODE = `<span class="c">&lt;!-- built from your Figma frame --&gt;</span>
<span class="t">&lt;section</span> <span class="a">class</span>=<span class="s">"hero"</span><span class="t">&gt;</span>
  <span class="t">&lt;h1&gt;</span>Grow faster<span class="t">&lt;/h1&gt;</span>
  <span class="t">&lt;p&gt;</span>Plans that fit<span class="t">&lt;/p&gt;</span>
  <span class="t">&lt;a</span> <span class="a">class</span>=<span class="s">"btn"</span><span class="t">&gt;</span>Start<span class="t">&lt;/a&gt;</span>
  <span class="t">&lt;img</span> <span class="a">src</span>=<span class="s">"hero.webp"</span><span class="t">&gt;</span>
<span class="t">&lt;/section&gt;</span>

<span class="p">.hero</span> {
  <span class="p">display</span>: grid;
  <span class="p">grid-template-columns</span>: 1.1fr .9fr;
  <span class="p">gap</span>: 6%;
  <span class="p">align-items</span>: center;
}`

/** Draggable "your design | our code" comparison. Keyboard accessible (arrow keys on the handle). */
export default function Demo() {
  const ref = useRef(null)
  const dragging = useRef(false)
  const [pos, setPos] = useState(50)
  const clamp = (v) => Math.max(6, Math.min(94, v))

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    let raf, t0
    setPos(94)
    const play = (ts) => {
      if (dragging.current) return
      t0 ??= ts + 500
      const k = Math.min(1, Math.max(0, (ts - t0) / 1600))
      setPos(94 - 44 * (1 - Math.pow(1 - k, 3)))
      if (k < 1) raf = requestAnimationFrame(play)
    }
    raf = requestAnimationFrame(play)
    return () => cancelAnimationFrame(raf)
  }, [])

  const fromEvent = (e) => { const r = ref.current.getBoundingClientRect(); setPos(clamp(((e.clientX - r.left) / r.width) * 100)) }
  const onKey = (e) => {
    if (e.key === 'ArrowLeft') { setPos((p) => clamp(p - 5)); e.preventDefault() }
    if (e.key === 'ArrowRight') { setPos((p) => clamp(p + 5)); e.preventDefault() }
    if (e.key === 'Home') setPos(6)
    if (e.key === 'End') setPos(94)
  }

  return (
    <div>
      <div
        ref={ref} className="demo" style={{ '--pos': `${pos}%` }} role="group" aria-label="Design to code comparison"
        onPointerDown={(e) => { dragging.current = true; e.currentTarget.setPointerCapture(e.pointerId); fromEvent(e) }}
        onPointerMove={(e) => dragging.current && fromEvent(e)}
        onPointerUp={() => (dragging.current = false)} onPointerCancel={() => (dragging.current = false)}
      >
        <div className="layer demo-design" aria-hidden="true">
          <div className="wf">
            <div className="wf-nav"><i className="logo" /><span /><span /><span /><b className="btn-s" /></div>
            <div className="wf-hero">
              <div className="wf-text"><i className="h" /><i className="h s" /><i className="pp" /><i className="pp s" /><b className="cta" /></div>
              <div className="wf-img" />
            </div>
            <div className="wf-row"><i /><i /><i /></div>
          </div>
          <span className="tagchip">Your design</span>
        </div>
        <div className="layer demo-code" aria-hidden="true">
          <span className="tagchip">Our code</span>
          <span dangerouslySetInnerHTML={{ __html: CODE }} />
        </div>
        <div className="absolute top-0 bottom-0 w-0.5 bg-brand z-[3] -translate-x-px" style={{ left: `${pos}%` }}>
          <button
            type="button" role="slider" aria-label="Drag to compare design and code" aria-valuemin={6} aria-valuemax={94} aria-valuenow={Math.round(pos)}
            onKeyDown={onKey}
            className="absolute top-1/2 left-1/2 w-[42px] h-[42px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-brand text-brand-ink grid place-items-center cursor-ew-resize shadow-[0_8px_20px_-6px_rgba(0,0,0,.4)] p-0"
          >
            <Icon name="swap" />
          </button>
        </div>
      </div>
      <p className="text-[.86rem] text-muted mt-3 mb-0 text-center">Drag the handle: left is the design, right is the code we write.</p>
    </div>
  )
}
