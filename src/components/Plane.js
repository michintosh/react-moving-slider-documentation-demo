import React from 'react'

function Plane() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,-1,0]} receiveShadow={true}>
            <planeBufferGeometry attach="geometry" args={[100,100]} />
            <meshPhysicalMaterial attach="material" color="gray" />
        </mesh>
    )
}

export default Plane
