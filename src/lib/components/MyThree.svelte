<script lang="ts">
    import { Canvas, T } from "@threlte/core";
    import { BoxGeometry, Color, Vector3 } from "three";

    let g: BoxGeometry;
    let v3 = new Vector3();

    $: if (g) {
        // https://blogg.bekk.no/procedural-planet-in-webgl-and-three-js-fc77f14f5505
        const pos = g.attributes.position;
        for (let i = 0; i < pos.count; i++) {
            v3.fromBufferAttribute(pos, i);
            v3.normalize().multiplyScalar(5);
            pos.setXYZ(i, v3.x, v3.y, v3.z);
        }
    }
    const color = new Color("#27272a").convertSRGBToLinear();
</script>

<div class="c-Three">
    <Canvas
        size={{
            height: 700,
            width: 700,
        }}
    >
        <T.PerspectiveCamera makeDefault position={[0, 0, 10]} fov={74} />

        <!-- Sphere -->
        <T.Group>
            <T.Mesh>
                <T.BoxGeometry bind:ref={g} args={[7, 7, 7, 32, 32, 32]} />
                <T.MeshBasicMaterial {color} />
            </T.Mesh>
        </T.Group>
    </Canvas>
</div>

<style>
    .c-Three {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
    }
</style>
