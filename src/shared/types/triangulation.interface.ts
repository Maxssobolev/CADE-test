export interface TriangulationResponse {
    vertices: {
        x: number;
        y: number;
        z: number;
    }[],
    triangles: number[][]
}