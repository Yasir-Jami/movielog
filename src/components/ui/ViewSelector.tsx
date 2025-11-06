import { ViewType, ViewTypeProps, ViewTypeItemProps } from "types";
import { List, LayoutList, LayoutGrid } from "lucide-react";

const ViewItem = (props: ViewTypeItemProps) => {
  const {itemViewType, itemIcon, viewTypeProps}: ViewTypeItemProps = props;
  
  return (
    <div className={`${viewTypeProps.className} view`} onClick={() => {viewTypeProps.handleViewSelection(itemViewType)}}>
      {itemIcon}
    </div>
  )
}

const ViewTypeDisplay = (viewTypeProps: ViewTypeProps) => {
  const size = 24; // icon size
  const viewsList = [
    {icon: LayoutGrid, type: ViewType.Card},
    {icon: List, type: ViewType.Detailed},
    {icon: LayoutList, type: ViewType.Compact},
  ];

  return (
    <div className={`${viewTypeProps.className} view-selector`}>
      {viewsList.map(({icon: Icon, type}, i) => {
        const isSelected = type === viewTypeProps.selectedViewType;
        const iconClass = `${viewTypeProps.className} view-icon ${isSelected ? "active-view": ""}`;
    
        return (
          <ViewItem 
          key={i} 
          itemViewType={type}
          itemIcon={<Icon className={iconClass} size={size}/>}
          viewTypeProps={viewTypeProps}
          />
        );
      })}
    </div>
  )
}

function ViewSelector(viewTypeProps: ViewTypeProps) {
  return (
    <ViewTypeDisplay {...viewTypeProps}></ViewTypeDisplay>
  )
}

export default ViewSelector;