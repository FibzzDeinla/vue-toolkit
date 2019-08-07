<template>
  <div id="header_group_filter">
    <div class="form-group row">
      <div class="col-md-3">
        <label for class="control-label">Location</label>
      </div>
      <div class="col-md-9">
        <KendoDropDownList id="Location" :dataSource="Location.dataSource" :dataValue="Location.dataValue" :dataText="Location.dataText" />
      </div>
    </div>
    <div class="form-group row">
      <div class="col-md-3">
        <label for class="control-label">Group</label>
      </div>
      <div class="col-md-9">
        <KendoDropDownList id="SiteGroup" :dataSource="SiteGroup.dataSource" :dataValue="SiteGroup.dataValue" :dataText="SiteGroup.dataText" />
      </div>
    </div>
  </div>
</template> 

<script lang="ts" src="./index.ts"></script>

<style scoped>
#header_group_filter {
  overflow: hidden;
  padding: 20px 20px 0px 20px;
}
</style>
