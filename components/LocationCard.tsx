    // 'use client';

    // import createGlobe from 'cobe';
    // import { MapPinIcon } from 'lucide-react';
    // import { useEffect, useRef } from 'react';
    // import { useSpring } from 'react-spring';

    // const LocationCard = () => {
    // const canvasRef = useRef<HTMLCanvasElement>(null);
    // const pointerInteracting = useRef<number | null>(null);
    // const pointerInteractionMovement = useRef(0);
    // const fadeMask =
    //     'radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgb(0, 0, 0, 0) 70%)';

    // const [{ r }, api] = useSpring(() => ({
    //     r: 0,
    //     config: {
    //     mass: 1,
    //     tension: 280,
    //     friction: 40,
    //     precision: 0.001,
    //     },
    // }));

    // useEffect(() => {
    //     let width = 0;

    //     const onResize = () => {
    //     if (canvasRef.current && (width = canvasRef.current.offsetWidth)) {
    //         window.addEventListener('resize', onResize);
    //     }
    //     };
    //     onResize();

    //     if (!canvasRef.current) return;

    //     const globe = createGlobe(canvasRef.current, {
    //     devicePixelRatio: 2,
    //     width: width * 2,
    //     height: width * 2,
    //     phi: 0.75 + Math.PI / 4, // Adjust phi to shift by 90 degrees
    //     theta: 2.1, // Adjust for Istanbul's latitude
    //     dark: 1,
    //     diffuse: 1,
    //     mapSamples: 36_000,
    //     mapBrightness: 2,
    //     baseColor: [0.8, 0.8, 0.8],
    //     markerColor: [235 / 255, 35 / 255, 35 / 255],
    //     glowColor: [0.5, 0.5, 0.5],
    //     markers: [{ location: [41.0082, 28.9784], size: 0.1 }], // Istanbul coordinates
    //     scale: 1.05,
    //     onRender: (state) => {
    //         state.phi = 20 + r.get(); // Adjust phi for animation
    //         state.width = width * 2;
    //         state.height = width * 2;
    //     },
    //     });

    //     return () => {
    //     globe.destroy();
    //     };
    // }, [r]);

    // return (
    //     <div className='mt-12 flex items-center justify-center relative h-60 w-[600px] flex-col gap-6 overflow-hidden rounded-xl p-4 shadow-feature-card dark:shadow-feature-card-dark lg:p-6 shadow-inner'>

    //     <div className='absolute inset-x-0 bottom-[-190px] mx-auto aspect-square w-[388px] [@media(max-width:420px)]:bottom-[-140px] [@media(max-width:420px)]:h-[320px] [@media(min-width:768px)_and_(max-width:858px)]:h-[350px]'>
    //     <div className='flex items-center justify-center gap-2'>
    //         <MapPinIcon className='w-5 h-5' />
    //         <h2 className='text-sm font-medium text-black dark:text-white'>Istanbul</h2>
    //     </div>
    //         <div
    //         style={{
    //             width: '100%',
    //             height: '100%',
    //             display: 'flex',
    //             placeItems: 'center',
    //             placeContent: 'center',
    //             overflow: 'visible',
    //         }}
    //         >
    //         <div
    //             style={{
    //             width: '100%',
    //             aspectRatio: '1/1',
    //             maxWidth: 800,
    //             WebkitMaskImage: fadeMask,
    //             maskImage: fadeMask,
    //             }}
    //         >
    //             <canvas
    //             ref={canvasRef}
    //             onPointerDown={(e) => {
    //                 pointerInteracting.current =
    //                 e.clientX - pointerInteractionMovement.current;
    //                 canvasRef.current &&
    //                 (canvasRef.current.style.cursor = 'grabbing');
    //             }}
    //             onPointerUp={() => {
    //                 pointerInteracting.current = null;
    //                 canvasRef.current && (canvasRef.current.style.cursor = 'grab');
    //             }}
    //             onPointerOut={() => {
    //                 pointerInteracting.current = null;
    //                 canvasRef.current && (canvasRef.current.style.cursor = 'grab');
    //             }}
    //             onMouseMove={(e) => {
    //                 if (pointerInteracting.current !== null) {
    //                 const delta = e.clientX - pointerInteracting.current;
    //                 pointerInteractionMovement.current = delta;
    //                 api.start({
    //                     r: delta / 200,
    //                 });
    //                 }
    //             }}
    //             onTouchMove={(e) => {
    //                 if (pointerInteracting.current !== null && e.touches[0]) {
    //                 const delta =
    //                     e.touches[0].clientX - pointerInteracting.current;
    //                 pointerInteractionMovement.current = delta;
    //                 api.start({
    //                     r: delta / 100,
    //                 });
    //                 }
    //             }}
    //             style={{
    //                 width: '100%',
    //                 height: '100%',
    //                 contain: 'layout paint size',
    //                 cursor: 'auto',
    //                 userSelect: 'none',
    //             }}
    //             />
    //         </div>
    //         </div>
    //     </div>
    //     </div>
    // );
    // };

    // export default LocationCard;
