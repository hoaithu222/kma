# Giai đoạn build
FROM node:20 AS build

WORKDIR /app
COPY . .

# Cài đặt các dependencies
RUN npm install --legacy-peer-deps

# Build ứng dụng Vite (output sẽ nằm trong thư mục dist)
RUN npm run build

# Production stage
FROM nginx:1.27.5
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy output từ bước build vào nginx để phục vụ
COPY --from=build /app/dist /usr/share/nginx/html

# (Tùy chọn) Nếu bạn có cấu hình nginx riêng cho SPA
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Khởi động nginx
CMD ["nginx", "-g", "daemon off;"]
