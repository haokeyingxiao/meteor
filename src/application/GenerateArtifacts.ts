import type { FileSystem } from "../common/domain/file-system/FileSystem";
import { Dictionary } from "../dictionary";
import { FigmaApi } from "../figmaApi";

export class GenerateArtifacts {
  public constructor(
    private readonly fileSystem: FileSystem,
    private readonly figmaApi: FigmaApi
  ) {}

  public async execute() {
    // https://www.figma.com/file/hSDX8IwmRAPOTL4NWPwVCl/%F0%9F%92%8E-Meteor-Primitives-%E2%80%93-0.0.1?type=design&node-id=1963%3A238380&mode=design&t=MIvPuq8LZIwxU80T-1
    const keyOfFileContainingPrimitiveTokens = "hSDX8IwmRAPOTL4NWPwVCl";

    // https://www.figma.com/file/8X90GCcpIa4GllKCHA7qFM/%F0%9F%92%8E-Meteor-Admin-Tokens-%E2%80%93-0.0.1?type=design&node-id=4%3A147&mode=design&t=YlIcPJh7KZX41p3T-1
    const keyOfFileContainingAdminTokens = "8X90GCcpIa4GllKCHA7qFM";

    const [primitiveTokenResponse, adminTokenResponse] = await Promise.all(
      [keyOfFileContainingPrimitiveTokens, keyOfFileContainingAdminTokens].map(
        (fileKey) => this.figmaApi.getLocalVariablesOfFile(fileKey)
      )
    );

    const primitiveDictionary = Dictionary.fromFigmaApiResponse(
      primitiveTokenResponse
    );

    const { $type: _, ...primitiveTokens } =
      primitiveDictionary.value["light mode"];

    this.fileSystem.saveFile(
      "./tokens/foundation/primitives.tokens.json",
      JSON.stringify(primitiveTokens, null, 2)
    );

    const adminDictionary = Dictionary.fromFigmaApiResponse(
      adminTokenResponse,
      primitiveTokenResponse
    );

    const { $type: __, ...adminTokensForLightMode } =
      adminDictionary.value["light mode"];

    this.fileSystem.saveFile(
      "./tokens/administration/light.tokens.json",
      // TODO: format with prettier
      JSON.stringify(adminTokensForLightMode, null, 2)
    );

    const { $type: ___, ...adminTokensForDarkMode } =
      adminDictionary.value["dark mode"];

    this.fileSystem.saveFile(
      "./tokens/administration/dark.tokens.json",
      // TODO: format with prettier
      JSON.stringify(adminTokensForDarkMode, null, 2)
    );
  }
}
