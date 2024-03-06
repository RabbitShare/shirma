import {
	MARK_BOLD,
	MARK_CODE,
	MARK_ITALIC,
	MARK_STRIKETHROUGH,
	MARK_UNDERLINE,
} from "@udecode/plate-basic-marks";
import { useEditorReadOnly } from "@udecode/plate-common";
import React from "react";

import { Icons } from "@/components/icons";

import { CommentToolbarButton } from "./comment-toolbar-button";
import { InsertDropdownMenu } from "./insert-dropdown-menu";
import { MarkToolbarButton } from "./mark-toolbar-button";
import { ModeDropdownMenu } from "./mode-dropdown-menu";
import { MoreDropdownMenu } from "./more-dropdown-menu";
import { ToolbarGroup } from "./toolbar";
import { TurnIntoDropdownMenu } from "./turn-into-dropdown-menu";

export function FixedToolbarButtons() {
	const readOnly = useEditorReadOnly();

	return (
		<div className="w-full overflow-hidden">
			<div
				className="flex flex-wrap"
				style={{
					// Conceal the first separator on each line using overflow
					transform: "translateX(calc(-1px))",
				}}
			>
				{!readOnly && (
					<>
						<ToolbarGroup noSeparator>
							<InsertDropdownMenu />
							<TurnIntoDropdownMenu />
						</ToolbarGroup>

						<ToolbarGroup>
							<MarkToolbarButton tooltip="Bold (⌘+B)" nodeType={MARK_BOLD}>
								<Icons.bold />
							</MarkToolbarButton>
							<MarkToolbarButton tooltip="Italic (⌘+I)" nodeType={MARK_ITALIC}>
								<Icons.italic />
							</MarkToolbarButton>
							<MarkToolbarButton
								tooltip="Underline (⌘+U)"
								nodeType={MARK_UNDERLINE}
							>
								<Icons.underline />
							</MarkToolbarButton>

							<MarkToolbarButton
								tooltip="Strikethrough (⌘+⇧+M)"
								nodeType={MARK_STRIKETHROUGH}
							>
								<Icons.strikethrough />
							</MarkToolbarButton>
							<MarkToolbarButton tooltip="Code (⌘+E)" nodeType={MARK_CODE}>
								<Icons.code />
							</MarkToolbarButton>

							{/* {isEnabled("font", id) && (
								<>
									<ColorDropdownMenu nodeType={MARK_COLOR} tooltip="Text Color">
										<Icons.color
											className={iconVariants({ variant: "toolbar" })}
										/>
									</ColorDropdownMenu>
									<ColorDropdownMenu
										nodeType={MARK_BG_COLOR}
										tooltip="Highlight Color"
									>
										<Icons.bg
											className={iconVariants({ variant: "toolbar" })}
										/>
									</ColorDropdownMenu>
								</>
							)} */}
						</ToolbarGroup>

						{/* <ToolbarGroup>
							{isEnabled("align", id) && <AlignDropdownMenu />}

							{isEnabled("lineheight", id) && <LineHeightDropdownMenu />}

							{isEnabled("indentlist", id) && indentList && (
								<>
									<IndentListToolbarButton nodeType={ListStyleType.Disc} />
									<IndentListToolbarButton nodeType={ListStyleType.Decimal} />
								</>
							)}

							{isEnabled("list", id) && !indentList && (
								<>
									<ListToolbarButton nodeType={ELEMENT_UL} />
									<ListToolbarButton nodeType={ELEMENT_OL} />
								</>
							)}

							{(isEnabled("indent", id) ||
								isEnabled("list", id) ||
								isEnabled("indentlist", id)) && (
								<>
									<OutdentToolbarButton />
									<IndentToolbarButton />
								</>
							)}
						</ToolbarGroup> */}
						{/* 
						<ToolbarGroup>
							{isEnabled("link", id) && <LinkToolbarButton />}

							{isEnabled("toggle", id) && <ToggleToolbarButton />}

							{isEnabled("media", id) && (
								<MediaToolbarButton nodeType={ELEMENT_IMAGE} />
							)}

							{isEnabled("table", id) && <TableDropdownMenu />}

							{isEnabled("emoji", id) && <EmojiDropdownMenu />}

							<MoreDropdownMenu />
						</ToolbarGroup> */}
					</>
				)}

				<div className="grow" />

				<ToolbarGroup noSeparator>
					<CommentToolbarButton />
					<ModeDropdownMenu />
				</ToolbarGroup>
			</div>
		</div>
	);
}
