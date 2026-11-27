import { NextResponse } from "next/server";

const productos = [
  { id: 1, nombre: "Pan campesino", precio: 2500, stock: 30 },
  { id: 2, nombre: "Croissant de mantequilla", precio: 3800, stock: 18 },
  { id: 3, nombre: "Almojábana", precio: 2200, stock: 25 },
];

export async function GET() {
  return NextResponse.json({
    ok: true,
    proyecto: "Panadería Rico Pan",
    data: productos,
  });
}