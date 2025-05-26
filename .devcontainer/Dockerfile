FROM node:24

ARG TARGETPLATFORM

RUN apt-get update && apt-get install -y \
    protobuf-compiler 

RUN echo "Docker build platform: $TARGETPLATFORM"


RUN if [ "$TARGETPLATFORM" = "linux/arm64" ]; then \
    wget https://github.com/grpc/grpc-web/releases/download/1.5.0/protoc-gen-grpc-web-1.5.0-linux-aarch64 -O /usr/local/bin/protoc-gen-grpc-web && \
    chmod +x /usr/local/bin/protoc-gen-grpc-web; \
    elif [ "$TARGETPLATFORM" = "linux/amd64" ]; then \
    wget https://github.com/grpc/grpc-web/releases/download/1.5.0/protoc-gen-grpc-web-1.5.0-linux-x86_64 -O /usr/local/bin/protoc-gen-grpc-web && \
    chmod +x /usr/local/bin/protoc-gen-grpc-web; \
    else \
    echo "Unsupported platform: $TARGETPLATFORM" && exit 1; \
    fi

# install protoc-gen-js globally and dependencies
RUN npm install -g protoc-gen-js && \
    npm install 