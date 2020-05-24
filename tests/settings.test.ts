import "ts-jest";
import { IHighlightStyles, Logger } from "../src";
import { TUtilsInspectColors } from "../src/interfaces";

const stdOut = [];
const stdErr = [];

const logger: Logger = new Logger({
  suppressStdOutput: true,
  stdOut: {
    write: (print: string) => {
      stdOut.push(print);
    },
  },
  stdErr: {
    write: (print: string) => {
      stdErr.push(print);
    },
  },
});

describe("Logger: settings", () => {
  beforeEach(() => {
    stdOut.length = 0;
    stdErr.length = 0;
  });

  test("init logger: plain", (): void => {
    const logger: Logger = new Logger();
    expect(logger instanceof Logger).toBe(true);
  });

  test("init logger: instanceName ", (): void => {
    const logger: Logger = new Logger({
      instanceName: "ABC",
      displayInstanceName: true,
    });
    expect(logger instanceof Logger).toBe(true);
    expect(logger.settings.instanceName).toBe("ABC");
  });

  test("init logger: minLevel", (): void => {
    const logger: Logger = new Logger({ minLevel: "debug" });
    expect(logger instanceof Logger).toBe(true);
    expect(logger.settings.minLevel).toBe("debug");
  });

  test("init logger: name", (): void => {
    const logger: Logger = new Logger({ name: "Test" });
    expect(logger instanceof Logger).toBe(true);
    expect(logger.settings.name).toBe("Test");
  });

  test("init logger: caller as logger name", (): void => {
    const logger: Logger = new Logger({ setCallerAsLoggerName: true });
    expect(logger instanceof Logger).toBe(true);
    expect(logger.settings.name).toBe("Logger");
  });

  test("init logger: exposeStack", (): void => {
    const logger: Logger = new Logger({ exposeStack: true });
    expect(logger instanceof Logger).toBe(true);
    expect(logger.settings.exposeStack).toBe(true);
  });

  test("init logger: suppressStdOutput", (): void => {
    const logger: Logger = new Logger({ suppressStdOutput: true });
    expect(logger instanceof Logger).toBe(true);
    expect(logger.settings.suppressStdOutput).toBe(true);
  });

  test("init logger: overwriteConsole", (): void => {
    const logger: Logger = new Logger({ overwriteConsole: true });
    expect(logger instanceof Logger).toBe(true);
    expect(logger.settings.overwriteConsole).toBe(true);
  });

  test("init logger: logAsJson", (): void => {
    const logger: Logger = new Logger({ logAsJson: true });
    expect(logger instanceof Logger).toBe(true);
    expect(logger.settings.logAsJson).toBe(true);
  });

  test("init logger: logLevelsColors", (): void => {
    const logger: Logger = new Logger({
      logLevelsColors: {
        0: "#000000",
        1: "#F00000",
        2: "#0F0000",
        3: "#00F000",
        4: "#000F00",
        5: "#0000F0",
        6: "#00000F",
      },
    });
    expect(logger instanceof Logger).toBe(true);
    expect(logger.settings.logLevelsColors[0]).toBe("#000000");
    expect(logger.settings.logLevelsColors[1]).toBe("#F00000");
    expect(logger.settings.logLevelsColors[2]).toBe("#0F0000");
    expect(logger.settings.logLevelsColors[3]).toBe("#00F000");
    expect(logger.settings.logLevelsColors[4]).toBe("#000F00");
    expect(logger.settings.logLevelsColors[5]).toBe("#0000F0");
    expect(logger.settings.logLevelsColors[6]).toBe("#00000F");
  });

  test("init logger: highlightStyles", (): void => {
    const highlightStyles: IHighlightStyles = {
      name: "blueBright",
      special: "redBright",
      number: "greenBright",
      bigint: "bgBlueBright",
      boolean: "bgBlue",
      undefined: "bgBlack",
      null: "bgMagentaBright",
      string: "bgRed",
      symbol: "black",
      date: "bgGreenBright",
      regexp: "reset",
      module: "hidden",
    };

    const logger: Logger = new Logger({
      highlightStyles,
    });
    expect(logger instanceof Logger).toBe(true);
    expect(logger.settings.highlightStyles.name).toBe(highlightStyles.name);
    expect(logger.settings.highlightStyles.special).toBe(
      highlightStyles.special
    );
    expect(logger.settings.highlightStyles.number).toBe(highlightStyles.number);
    expect(logger.settings.highlightStyles.bigint).toBe(highlightStyles.bigint);
    expect(logger.settings.highlightStyles.boolean).toBe(
      highlightStyles.boolean
    );
    expect(logger.settings.highlightStyles.undefined).toBe(
      highlightStyles.undefined
    );
    expect(logger.settings.highlightStyles.null).toBe(highlightStyles.null);
    expect(logger.settings.highlightStyles.string).toBe(highlightStyles.string);
    expect(logger.settings.highlightStyles.symbol).toBe(highlightStyles.symbol);
    expect(logger.settings.highlightStyles.date).toBe(highlightStyles.date);
    expect(logger.settings.highlightStyles.regexp).toBe(highlightStyles.regexp);
    expect(logger.settings.highlightStyles.module).toBe(highlightStyles.module);
  });

  test("init logger: stdOut", (): void => {
    const std: { write: () => void } = { write: () => {} };
    const logger: Logger = new Logger({ stdOut: std });
    expect(logger instanceof Logger).toBe(true);
    expect(logger.settings.stdOut).toBe(std);
  });

  test("init logger: stdErr", (): void => {
    const std: { write: () => void } = { write: () => {} };
    const logger: Logger = new Logger({ stdErr: std });
    expect(logger instanceof Logger).toBe(true);
    expect(logger.settings.stdErr).toBe(std);
  });
});
