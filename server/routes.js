import authRoutes from "../services/auth/routes";

export default function routes(app) {
  app.use("/api/auth", authRoutes);
}
