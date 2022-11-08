import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { auth } from "@/config/auth";

export const authorize = (
  request: Request,
  response: Response,
  next: NextFunction,
): Response | undefined => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ message: "Não autorizado!" });
  }

  const token = authorization?.split(" ")[1];

  try {
    const jwtPayload = verify(token, auth.secret);

    response.locals.jwtPayload = jwtPayload;

    next();
  } catch (error) {
    return response.status(401).json({ message: "Não autorizado!" });
  }
};
