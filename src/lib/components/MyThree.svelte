<script lang="ts">
    import { T, useFrame } from "@threlte/core";
    import { Color, Euler } from "three";
    import { lerp } from "three/src/math/MathUtils";

    export let shape: "projects" | "experience" | "skills" | undefined;

    const color = new Color("pink").convertSRGBToLinear();

    const lerpRotation = (rot1: Euler, rot2: Euler, f: number) => {
        rot1.x = lerp(rot1.x, rot2.x, f);
        rot1.y = lerp(rot1.y, rot2.y, f);
        rot1.z = lerp(rot1.z, rot2.z, f);
    };

    const ROTATION_CLOSED = new Euler();
    const ROTATION_OPEN = new Euler(Math.PI / 4, Math.PI / 4, Math.PI / 4);
    let cubeRotation = new Euler();
    let coneRotation = new Euler();
    let torusRotation = new Euler();

    const SCALE_CLOSED = 0;
    const SCALE_OPEN = 1;
    let cubeScale = 0;
    let coneScale = 0;
    let torusScale = 0;

    let prevTimestamp: number;
    useFrame(({ clock }) => {
        const elapsed = clock.getElapsedTime();
        if (!prevTimestamp) {
            prevTimestamp = elapsed;
        }
        const delta = elapsed - prevTimestamp;
        prevTimestamp = elapsed;

        const scaleSpeed = 10 * delta;
        const rotationSpeed = 10 * delta;
        switch (shape) {
            case "projects":
                cubeScale = lerp(cubeScale, SCALE_OPEN, scaleSpeed);
                coneScale = lerp(coneScale, SCALE_CLOSED, scaleSpeed);
                torusScale = lerp(torusScale, SCALE_CLOSED, scaleSpeed);

                lerpRotation(cubeRotation, ROTATION_OPEN, rotationSpeed);
                lerpRotation(coneRotation, ROTATION_CLOSED, rotationSpeed);
                lerpRotation(torusRotation, ROTATION_CLOSED, rotationSpeed);
                break;
            case "experience":
                cubeScale = lerp(cubeScale, SCALE_CLOSED, scaleSpeed);
                coneScale = lerp(coneScale, SCALE_OPEN, scaleSpeed);
                torusScale = lerp(torusScale, SCALE_CLOSED, scaleSpeed);

                lerpRotation(cubeRotation, ROTATION_CLOSED, rotationSpeed);
                lerpRotation(coneRotation, ROTATION_OPEN, rotationSpeed);
                lerpRotation(torusRotation, ROTATION_CLOSED, rotationSpeed);
                break;
            case "skills":
                cubeScale = lerp(cubeScale, SCALE_CLOSED, scaleSpeed);
                coneScale = lerp(coneScale, SCALE_CLOSED, scaleSpeed);
                torusScale = lerp(torusScale, SCALE_OPEN, scaleSpeed);

                lerpRotation(cubeRotation, ROTATION_CLOSED, rotationSpeed);
                lerpRotation(coneRotation, ROTATION_CLOSED, rotationSpeed);
                lerpRotation(torusRotation, ROTATION_OPEN, rotationSpeed);
                break;
            default:
                cubeScale = lerp(cubeScale, SCALE_CLOSED, scaleSpeed);
                coneScale = lerp(coneScale, SCALE_CLOSED, scaleSpeed);
                torusScale = lerp(torusScale, SCALE_CLOSED, scaleSpeed);

                lerpRotation(cubeRotation, ROTATION_CLOSED, rotationSpeed);
                lerpRotation(coneRotation, ROTATION_CLOSED, rotationSpeed);
                lerpRotation(torusRotation, ROTATION_CLOSED, rotationSpeed);
        }
        console.log(cubeRotation.x);
    });
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 10]} fov={74} />

<T.Mesh scale={cubeScale} rotation={[cubeRotation.x, cubeRotation.y, cubeRotation.z]}>
    <T.BoxGeometry args={[5, 5, 5, 32, 32, 32]} />
    <T.MeshBasicMaterial {color} />
</T.Mesh>
<T.Mesh scale={coneScale} rotation={[coneRotation.x, coneRotation.y, coneRotation.z]}>
    <T.ConeGeometry args={[5, 10, 32]} />
    <T.MeshBasicMaterial {color} />
</T.Mesh>
<T.Mesh scale={torusScale} rotation={[torusRotation.x, torusRotation.y, torusRotation.z]}>
    <T.TorusKnotGeometry args={[2, 0.6, 100, 16]} />
    <T.MeshBasicMaterial {color} />
</T.Mesh>
