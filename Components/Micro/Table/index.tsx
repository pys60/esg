import cn from "classnames";
import React from "react";

export type CellConfig = {
  content: string;
  className?: string;
  width?: string;
  colSpan?: number;
  rowSpan?: number;
  isInput?: boolean;
};

export type TableConfig = CellConfig[][];

export type TableContainerProps = {
  children?: React.ReactNode;
  maxHeight?: string;
  className?: string;
  config?: TableConfig;
  theme?: "dark" | "light";
  setConfig?: (config: TableConfig) => void;
};

export type TableHeaderProps = {
  headers: {
    title: React.ReactNode;
    width?: string;
    colSpan?: number;
  }[];
  className?: string;
};

export type TableBodyProps = {
  children?: React.ReactNode;
  className?: string;
};

export type TableRowProps = {
  children?: React.ReactNode;
  className?: string;
};

export type TableCellProps = {
  children?: React.ReactNode;
  className?: string;
  width?: string;
  colSpan?: number;
  rowSpan?: number;
};

export type SpannedCellConfig = CellConfig & { spanned?: boolean };

const calculateSpans = (config: TableConfig) => {
  const grid: SpannedCellConfig[][] = config.map((row) =>
    row.map((cell) => ({ ...cell }))
  );

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const cell = grid[i][j];
      if (cell.spanned) continue;

      const rowSpan = cell.rowSpan || 1;
      const colSpan = cell.colSpan || 1;

      if (rowSpan > 1 || colSpan > 1) {
        for (let r = 0; r < rowSpan; r++) {
          for (let c = 0; c < colSpan; c++) {
            if (r === 0 && c === 0) continue; // Skip the current cell
            const targetRow = i + r;
            const targetCol = j + c;
            if (targetRow < grid.length && targetCol < grid[targetRow].length) {
              grid[targetRow][targetCol].spanned = true;
            }
          }
        }
      }
    }
  }

  return grid;
};

export const TableContainer: React.FC<TableContainerProps> = ({
  children,
  maxHeight = "400px",
  className,
  config,
  theme = "dark",
  setConfig,
}) => {
  const grid = config ? calculateSpans(config) : [];

  const themeClasses = {
    dark: {
      table: "bg-neutral-900 text-neutral-300",
      headerCell: "bg-neutral-800",
      cell: "border-neutral-700",
      hoverRow: "hover:bg-neutral-800",
    },
    light: {
      table: "bg-neutral-50 text-neutral-900",
      headerCell: "bg-[#FFF4D6] font-bold",
      cell: "border-neutral-200",
      hoverRow: "hover:bg-neutral-100",
    },
  };

  const handleInputChange = (
    rowIndex: number,
    cellIndex: number,
    value: string
  ) => {
    if (setConfig && config) {
      const newConfig = config.map((row, rIndex) =>
        row.map((cell, cIndex) => {
          if (rIndex === rowIndex && cIndex === cellIndex) {
            return { ...cell, content: value };
          }
          return cell;
        })
      );
      setConfig(newConfig);
    }
  };

  return (
    <div
      className={cn(
        "relative overflow-x-auto shadow-md sm:rounded-lg",
        themeClasses[theme].table,
        className
      )}
      style={{ maxHeight }}
    >
      <table className="w-full text-sm text-left border-collapse">
        {config ? (
          <tbody>
            {grid.map((row, rowIndex) => (
              <tr key={rowIndex} className={themeClasses[theme].hoverRow}>
                {row.map((cell, cellIndex) => {
                  if (cell === null) return null;

                  return (
                    <td
                      key={cellIndex}
                      className={cn(
                        "px-4 py-6 whitespace-normal border",
                        themeClasses[theme].cell,
                        { [themeClasses[theme].headerCell]: rowIndex < 1 },
                        cell.className
                      )}
                      style={{
                        width: cell.width,
                        minWidth: cell.width,
                      }}
                      rowSpan={cell.rowSpan}
                      colSpan={cell.colSpan}
                    >
                      {!cell.isInput ? (
                        cell.content
                      ) : (
                        <input
                          type="text"
                          className="w-full h-full p-1 border border-none focus:outline-none bg-transparent"
                          value={cell.content}
                          onChange={(e) =>
                            handleInputChange(
                              rowIndex,
                              cellIndex,
                              e.target.value
                            )
                          }
                        />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        ) : (
          children
        )}
      </table>
    </div>
  );
};

export const TableHeader: React.FC<TableHeaderProps> = ({
  headers,
  className,
}) => {
  return (
    <thead
      className={cn(
        "text-xs uppercase bg-neutral-700 sticky top-0 z-10",
        className
      )}
    >
      <tr>
        {headers.map((header, idx) => (
          <th
            key={idx}
            scope="col"
            className="px-6 py-3 border border-neutral-600"
            style={{ width: header.width }}
            colSpan={header.colSpan}
          >
            {header.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export const TableBody: React.FC<TableBodyProps> = ({
  children,
  className,
}) => {
  return <tbody className={className}>{children}</tbody>;
};

export const TableRow: React.FC<TableRowProps> = ({ children, className }) => {
  return <tr className={cn("hover:bg-neutral-700", className)}>{children}</tr>;
};

export const TableCell: React.FC<TableCellProps> = ({
  children,
  className,
  width,
  colSpan,
  rowSpan,
}) => {
  return (
    <td
      className={cn(
        "px-6 py-4 whitespace-normal border border-neutral-600",
        {
          "border-b-0": rowSpan && rowSpan > 1,
          "border-r-0": colSpan && colSpan > 1,
        },
        className
      )}
      style={{ width, minWidth: width }}
      colSpan={colSpan}
      rowSpan={rowSpan}
    >
      {children}
    </td>
  );
};
