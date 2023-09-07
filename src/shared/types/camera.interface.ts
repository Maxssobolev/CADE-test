import { Mesh, BufferGeometry, NormalBufferAttributes } from "three";

export interface ICameraParams {
    zPosition?: number;
    fow?: number;
    aspect?: number;
    near?: number;
    far?: number;
}