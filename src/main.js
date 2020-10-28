import { spline } from "./spline.js";

const path = document.querySelector("#testPath");

const points = [
    [0, 0],
    [100, 0],
    [100, 100],
    [0, 100],
];

const smooth = spline(points, 0.5, true);
path.setAttribute("d", smooth);

