#version 330 core

// the atlas texture
uniform sampler2D atlasTexture;
uniform vec4 modulation;

// expecting rasterization to properly interpolate UV
in vec2 texCoord;

out vec4 FragColor;

void main()
{
//	FragColor = vec4(texCoord, 0.0f, 1.0f);
	FragColor = texture(atlasTexture, texCoord);
}