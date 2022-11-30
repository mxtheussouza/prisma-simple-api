import { Router, Request, Response, IRoute } from "express";
import { Controller } from "@/interfaces/controller.interface";

type Methods = "get" | "post" | "put" | "patch" | "delete";

export class RouteBuilder {
  private routeBuilderPath: string;
  private routeBuilderMethod: string;
  private routeBuilderMiddlewares: any[] = [];
  private routeBuilderController: (
    request: Request,
    response: Response,
  ) => Promise<Response<any, Record<string, any>>>;

  private readonly routerBuilder: Router;

  constructor(router: Router) {
    this.routerBuilder = router;
  }

  public static router(router: Router): RouteBuilder {
    return new RouteBuilder(router);
  }

  public method(method: Methods): this {
    this.routeBuilderMethod = method;
    return this;
  }

  public path(path: string): this {
    this.routeBuilderPath = path;
    return this;
  }

  public middlewares(middlewares: any[]): this {
    this.routeBuilderMiddlewares = middlewares;
    return this;
  }

  public controller(controller: Controller): this {
    this.routeBuilderController = (request: Request, response: Response) =>
      controller.handle(request, response);
    return this;
  }

  public build(): Router {
    return this.routerBuilder
      .route(this.routeBuilderPath)
      [this.routeBuilderMethod as keyof IRoute](
        ...this.routeBuilderMiddlewares,
        this.routeBuilderController,
      ) as Router;
  }
}
